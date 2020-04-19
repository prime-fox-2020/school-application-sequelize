const {Subject} = require('../models')

class SubjectsController {

  static findAll(req, res) {
    Subject.findAll({
      order: [ [ 'id', 'ASC' ] ]
    })
      .then(subjects => {
        let locals = {
          subjects: subjects,
          alert: req.query
        }
        res.render('subject', locals)
      })
      .catch(err => res.send(err))
  }

  static search(req, res) {
    // res.send(req.body)
    Subject.findAll({
      where: {
        id: req.body.search
      }
    })
      .then(results => {
        let locals = { subjects: results }
        if (results !== null) {
          locals.alert = {
            message: `Found ${results.length} subject with ID '${req.body.search}'`,
            type: 'success'
          }
          res.render('subject', locals)
        } else {
          locals.alert = {
            message: `Found 0 subject with ID '${req.body.search}'`,
            type: 'danger'
          }
          res.render('subject', locals)
        }
      })
      .catch(err => res.send(err))
  }

  static addForm(req, res) {
    let locals = {
      data: {},
      alert: {},
      method: 'add',
      title: 'Input new subject'
    }
    res.render('subject/form', locals)
  }

  static add(req, res) {
    const error = SubjectsController.validation(req.body)
    const message = 'New subject added successfully.'
    let locals = {
      alert: { message: error, type: 'danger' },
      data: req.body,
      method: 'add',
      title: 'Input new subject'
    }
    if (error.length) {
      res.render('subject/form', locals)
    } else {
      Subject.create(req.body)
        .then(result => res.redirect(`/subjects?message=${message}&type=success`))
        .catch(err => res.send(err))
    }
  }

  static editForm(req, res) {
    const fail = `Subject with ID ${req.params.id} is not found.`
    if (isNaN(req.params.id)) {
      res.redirect(`/subjects?message=${fail}&type=danger`)
    } else {
      Subject.findByPk(req.params.id)
        .then(results => {
          if (results !== null) {
            let locals = {
              alert: {},
              data: results,
              method: 'edit',
              title: 'Edit data subject'
            }
            res.render('subject/form', locals)
          } else {
            res.redirect(`/subjects?message=${fail}&type=danger`)
          }
        })
        .catch(err => res.send(err))
    }
  }

  static edit(req, res) {
    const error = SubjectsController.validation(req.body)
    const message = 'Data subject has been updated successfully.'
    let locals = {
      alert: { message: error, type: 'danger' },
      data: req.body,
      method: 'edit',
      title: 'Edit data subject'
    }

    if (error.length) {
      req.body.id = Number(req.params.id)
      res.render('subject/form', locals)
    } else {
      Subject.update(req.body, { where: { id: req.params.id } })
        .then(result => res.redirect(`/subjects?message=${message}&type=success`))
        .catch(err => res.send(err))
    }
  }

  static delete(req, res) {
    const success = `Subject with ID ${req.params.id} successfully deleted.`
    const fail = `Subject with ID ${req.params.id} is not found.`
    if (isNaN(req.params.id)) {
      res.redirect(`/subjects?message=${fail}&type=danger`)
    } else {
      Subject.findByPk(req.params.id)
        .then(results => {
          if (results !== null) {
            Subject.destroy({ where: { id: Number(req.params.id) } })
              .then(results => res.redirect(`/subjects?message=${success}&type=success`))
              .catch(err => res.send(err))
          } else {
            res.redirect(`/subjects?message=${fail}&type=danger`)
          }
        })
        .catch(err => res.send(err))
    }
  }

  static validation({ subjectName }) {
    const error = []
    if (!subjectName) error.push('Please enter subject name.')
    return error
  }
}

module.exports = SubjectsController