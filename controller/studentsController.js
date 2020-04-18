const Student = require('../models').Student;

class StudentsController {
  static getData(req, res) {
    Student.findAll({order: [['id', 'ASC']]})
    .then(data => {
      res.render('students', {data});
    })
    .catch(err => {
      res.send(err);
    })
  }

  static addData(req, res) {
    res.render('students_form', {data: null, title: 'Add'});
  }

  static add(req, res) {
    const date = req.body.birth_date.split('/')
    const value = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: new Date(`${date[2]}/${date[1]}/${date[0]}`)
    }
    
    Student.create(value)
    .then(data => {
      res.redirect('/students');
    })
    .catch(err => {
      res.send(err);
    })
  }

  static editData(req, res) {
    Student.findAll()
    .then(data => {
      data.forEach(el => {
        if (el.id == req.params.id) {
          res.render('students_form', {data: el, title: 'Edit'});
        }
      })
    })
  }

  static edit(req, res) {
    const date = req.body.birth_date.split('/').reverse().join('-');
    const value = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: new Date(date)
    }

    Student.update(value, {where: {id: req.params.id}})
    .then(data => {
      res.redirect('/students');
    })
    .catch(err => {
      res.send(err);
    })
  }

  static delete(req, res) {
    Student.destroy({where: {id: req.params.id}})
    .then(() => res.redirect('/students'))
    .catch(err => res.send(err))
  }
}

module.exports = StudentsController;