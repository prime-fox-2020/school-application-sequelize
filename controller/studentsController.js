//get data from model
// const STM = require('../model/studentsModel');

//cara require 1
const Students = require('../models').Students;

//cara require 2
// const { Students } = require(../models); // cara 2

class StudentsController {

  static studentList(req, res) {
    Students.findAll()
    .then(data => {
      res.render('students' , {data})
    })
    .catch( err => {
      res.send(err);
    })
    // STM.getStudent()
    // .then(data => {
    //      return res.render('students', {data})
    //   })
    //   .catch(err =>{
    //      throw err
    //   })
  }

  static studentEmail(req, res) {
    // STM.getEmail(req.params.email)
    Students.findAll({where: {email: req.params.email}})
    .then(data => {
         return res.render('students', {data})
      })
      .catch(err =>{
         throw err
      })

  }

  static add(req, res) {
    res.render('add');
  }

  static addPost(req, res) {
    Students.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      gender: req.body.gender,
      birthdate: req.body.birthdate
    })
    // STM.addStudent(req.body.firstName, req.body.lastName, req.body.email, req.body.gender, req.body.birthdate)

    .then(data => {
         res.redirect('/students')
      })
      .catch(err =>{
         res.send(err);
       })
    // .then(data => {
    //      return res.redirect('/students')
    //   })
    //   .catch(err =>{
    //      throw err
    //   })
  }

  static edit(req, res) {
    Students.findAll({where:{id: req.params.id}})
    // STM.getStudentID(Number(req.params.id))
    .then(data => {
         res.render('edit', {data})
      })
      .catch(err =>{
         res.send(err);
      })
    // .then(data => {
    //      return res.render('edit', {data})
    //   })
    //   .catch(err =>{
    //      throw err
    //   })

  }

  static editPost(req, res) {
    Students.update({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      gender: req.body.gender,
      birthdate: req.body.birthdate
    },{where:{id: req.params.id}})
    // STM.editStudent(req.params.id, req.body.firstName, req.body.lastName, req.body.email, req.body.gender, req.body.birthdate)
    .then(data => {
      res.redirect('/students')
    })
    .catch(data => {
      res.send(err);
    })
    // .then(data => {
    //      return res.redirect('/students')
    //   })
    //   .catch(err =>{
    //      throw err
    //   })
  }

  static deleteStudentById(req, res) {
    Students.destroy({where:{id:req.params.id}})
    // STM.deleteStudent(req.params.id)
    .then(data => {
      res.redirect('/students')
    })
    .catch(err => {
      res.send(err);
    })
    // .then(data => {
    //      return res.redirect('/students')
    //   })
    //   .catch(err =>{
    //      throw err
    //   })
  }

}

//send data to routes (students.js)
module.exports = StudentsController;
