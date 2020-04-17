'use strict'
const { Teacher } = require('../models')

class TeacherController{
  static getTeachers(req, res){
    Teacher.findAll()
      .then(teachers => res.render('teachers', {teachers}))
      .catch(err => res.send(err))
  }

  static getTeacherId(req, res){
    Teacher.findPk(req.params.id)
      .then(result => res.render('teachers', {teachers: [result]}))
      .catch(err => res.send(err))
  }
}

module.exports = TeacherController;