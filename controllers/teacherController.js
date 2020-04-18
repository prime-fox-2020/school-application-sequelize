const teachers = require('../models').Teacher;


class TeachersController{
  static show(req,res){
    teachers.findAll()
    .then(teachers=>{
      res.render('teachers.ejs', {teachers})
    })
    .catch(err=>{
      res.send(err)
    })
  } 

  static getById(req,res){
    teachers.findByPk(req.params.id)
    .then(teachers=>{
      console.log(teachers[0])
      res.render('teachers.ejs', {teachers : [teachers.dataValues]})
    })
    .catch(err=>{
      res.send(err)
    })
  }
 }
 
 
 module.exports = TeachersController