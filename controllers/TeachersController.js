const {Teacher} = require('../models')
class TeachersController {

  static findAll(req, res) {
    Teacher.findAll({})
      .then(teachers => {
        let locals = {
          teachers: teachers,
          alert: req.query
        }
        res.render('teacher', locals)
      })
      .catch(err => res.send(err))
  }

  static search(req, res) {
    // res.send(req.body)
    Teacher.findAll({
      where: {
        id: req.body.search
      }
    })
    .then(results => {
      let locals = { teachers: results }
      if (results !== null) {
        locals.alert = {
          message: `Found ${results.length} teacher with ID '${req.body.search}'`,
          type: 'success'
        }
        res.render('teacher', locals)
      } else {
        locals.alert = {
          message: `Found 0 teacher with ID '${req.body.search}'`,
          type: 'danger'
        }
        res.render('teacher', locals)
      }
    })
    .catch(err => res.send(err))
  }

  static addForm(req, res) {
    let locals = {
      data: {},
      alert: {},
      method: 'add',
      title: 'Input new teacher'
    }
    res.render('teacher/form', locals)
  }

  static add(req, res) {
    const error = TeachersController.validation(req.body)
    const message = 'New teacher added successfully.'
    let locals = {
      alert: { message: error, type: 'danger' },
      data: req.body,
      method: 'add',
      title: 'Input new teacher'
    }
    if (error.length) {
      res.render('teacher/form', locals)
    } else {
      Teacher.create(req.body)
        .then(result => res.redirect(`/teachers?message=${message}&type=success`))
        .catch(err => res.send(err))
    }
  }

  static editForm(req, res) {
    const fail = `Teacher with ID ${req.params.id} is not found.`
    if (isNaN(req.params.id)) {
      res.redirect(`/teachers?message=${fail}&type=danger`)
    } else {
      Teacher.findByPk(req.params.id)
        .then(results => {
          if (results !== null) {
            let locals = {
              alert: {},
              data: results,
              method: 'edit',
              title: 'Edit data teacher'
            }
            res.render('teacher/form', locals)
          } else {
            res.redirect(`/teachers?message=${fail}&type=danger`)
          }
        })
        .catch(err => res.send(err))
    }
  }

  static edit(req, res) {
    const error = TeachersController.validation(req.body)
    const message = 'Data teacher has been updated successfully.'
    let locals = {
      alert: { message: error, type: 'danger' },
      data: req.body,
      method: 'edit',
      title: 'Edit data teacher'
    }

    if (error.length) {
      req.body.id = Number(req.params.id)
      res.render('teacher/form', locals)
    } else {
      Teacher.update(req.body, { where: { id: req.params.id } })
        .then(result => res.redirect(`/teachers?message=${message}&type=success`))
        .catch(err => res.send(err))
    }
  }

  static delete(req, res) {
    const success = `Teacher with ID ${req.params.id} successfully deleted.`
    const fail = `Teacher with ID ${req.params.id} is not found.`
    if (isNaN(req.params.id)) {
      res.redirect(`/teachers?message=${fail}&type=danger`)
    } else {
      Teacher.findByPk(req.params.id)
        .then(results => {
          if (results !== null) {
            Teacher.destroy({ where: { id: Number(req.params.id) } })
              .then(results => res.redirect(`/teachers?message=${success}&type=success`))
              .catch(err => res.send(err))
          } else {
            res.redirect(`/teachers?message=${fail}&type=danger`)
          }
        })
        .catch(err => res.send(err))
    }
  }

  static validation({ firstName, gender, email }) {
    const error = []
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if (!firstName) error.push('Please enter first name.')
    if (!gender) error.push('Please select student\'s gender')
    if (!validEmail) error.push('Email is not valid email format')
    return error
  }
}

module.exports = TeachersController