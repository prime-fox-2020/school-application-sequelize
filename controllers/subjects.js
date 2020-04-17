'use strict'
const { Subject } = require('../models')

class SubjectsController{
  static getSubjects(req, res){
    Subject.findAll()
      .then(subjects => res.render('subjects', {subjects}))
      .catch(err => res.send(err))
  }

  static getSubjectId(req, res){
    Subject.findPk(req.params.id)
      .then(result => res.render('subjects', {subjects: [result]}))
      .catch(err => res.send(err))
  }
}

module.exports = SubjectsController;