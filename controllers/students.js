'use strict'

const {Student} = require('../models')  

class StudentController{
  static getStudents(req, res){
    Student.findAll()
      .then(students => res.render('students', {students : students}))
      .catch(err => res.send(err))
  }

  static addGet(req, res){
    const error = req.query.error
    res.render('students/add', {error : error})
  }

  static addPost(req, res){
    const error = StudentController.validation(req.body)
    if(error.length){
      res.redirect(`/students/add?error=${error.join(', ')}`)
    }
    Student.create({
        first_name  : req.body.first_name,
        last_name   : req.body.last_name,
        email       : req.body.email,
        gender      : req.body.gender,
        birth_date  : req.body.birthday
      })
      .then(result => res.redirect('/students'))
      .catch(err => res.send(err))
  }

  static editGet(req, res){
    Student.findByPk(req.params.id)
      .then(student => {
        const error = req.query.error
        res.render('students/edit', {error : error, student : student})
      })
      .catch(err => res.send(err))
  }

  static editPost(req, res){
    const err = StudentController.validation(req.body)
    if(err.length){
      res.redirect(`/students/${req.params.id}/edit?error=${err.join(', ')}`)
    }
    Student.update({
        first_name  : req.body.first_name,
        last_name   : req.body.last_name,
        email       : req.body.email,
        gender      : req.body.gender,
        birth_date  : req.body.birthday
      },{
        returnig: true,
        where   : {id: req.params.id}
      })
    .then(result => res.redirect('/students'))
    .catch(err => res.send(err))
  }

  static deleteGet(req, res){
    Student.findByPk(req.params.id)
      .then(student => student.destroy())
      .then(result => res.redirect('/students'))
      .catch(err => res.send(err))
  }

  static getByEmail(req, res){
    Student.findOne({
      where:{
        email: req.params.email
      }
    })
      .then(result => res.render('students', {students: [result]}))
      .catch(err => res.send(err))
  }

  static validation(student){
    console.log('ini validation')
    const error = []
    const date = student.birthday
    if(!student.first_name.length) error.push('First Name Cannot be empty')
    if(!student.last_name.length) error.push('Last Name Cannot be empty')
    if(!student.email.length) error.push('Email Cannot be empty')
    if(!student.gender.length) error.push('Gender Cannot be empty')
    if(!student.birthday.length) error.push('Birth Date Cannot be empty')
    else if(
      date[4] !== '-' || date[7] !== '-' ||
      Number (date[5] + date[6]) > 12 ||
      Number (date[8] + date[9]) > 31 ||
      date.length > 10 ||
      isNaN(`${date[0]}${date[1]}${date[2]}${date[3]}`) ||
      isNaN(`${date[5]}${date[6]}`) ||
      isNaN(`${date[8]}${date[9]}`) ||
      Number(`${date[0]}${date[1]}${date[2]}${date[3]}`) < 0 ||
      Number(`${date[5]}${date[6]}`) < 0 ||
      Number(`${date[8]}${date[9]}`) < 0
      ) error.push('Date in wrong format')
    
    return error;
  }
}

module.exports = StudentController