const subjects = require('../models').Subject;


class SubjectController{
  static show(req,res){
    subjects.findAll()
    .then(subjects=>{
      res.render('subjects.ejs', {subjects})
    })
    .catch(err=>{
      res.send(err)
    })
  } 

  static getById(req,res){
    subjects.findByPk(req.params.id)
    .then(subjects=>{
      console.log(subjects[0])
      res.render('subjects.ejs', {subjects : [subjects.dataValues]})
    })
    .catch(err=>{
      res.send(err)
    })
  }
 }
 
 
 module.exports = SubjectController