const Teacher = require('../models').Teacher

class TeachersController {

  static getTeachers(req, res) {
    Teacher.findAll()
    .then(data => {
      res.render('teachers', {teachers: data})
    })
    .catch(err => {
      res.render('error', {error: err})
    })
  }

  static getId(req, res) {
    Teacher.findAll({where: {id: req.params.id}}) 
    .then(data => {
      res.render('teachers', {teachers: data})
    })
    .catch(err => {
      res.render('error', {error:'Id Not Found'})
    })
  }

}

module.exports = TeachersController