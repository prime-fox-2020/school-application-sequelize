const Student = require('../models').Student

class StudentsController {

  static getStudents(req, res) {
    Student.findAll()
    .then(data => {
      res.render('students', {students: data, alert: req.query})
    })
    .catch(err => {
      res.render('error', {error:err})
    })
  }

  static addStudents(req, res) {
    res.render('add')
  }

  static postAdd(req, res) {
    const error = StudentsController.validation(req.body)

    if(error.length >= 4) {
      res.redirect(`/students?message=Please fill the form first&type=danger`)
    } else if(error.length > 0 ) {
      res.redirect(`/students?message=${error}&type=danger`)
    } else {
      Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        birth_date: req.body.birth_date
      })
      .then(() => {
        res.redirect(`/students?message=Successfully added ${req.body.first_name} ${req.body.last_name} students &type=success`)
      })
      .catch(err => {
        res.render('error', {error:err})
      })
    }
  }

  static getEdit(req, res) {
    let studentId = Number(req.params.id)
    Student.findAll({ where: {id: studentId}})
    .then(data => {
      res.render('edit', {data:data[0]})
    })
    .catch(err => {
      res.render('error', {error: err})
    })
  }

  static postEdit(req, res) {
    const edited = {
      id: Number(req.params.id),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: req.body.birth_date
    }

    const error = StudentsController.validation(edited)
    if(error.length >= 4) {
      res.redirect(`/students?message=Please fill the form first&type=danger`)
    } else if(error.length > 0 ) {
      res.redirect(`/students?message=${error}&type=danger`)
    } else {
      Student.update({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        birth_date: req.body.birth_date
      }, {where:{id:req.params.id}})
      .then(() => {
        res.redirect(`/students?message=Successfully edited student ${req.body.first_name}&type=success`)
      })
      .catch(err => {
        res.render('error', {error:err})
      })
    }
  }

  static getEmail(req, res) {
    let studentEmail = req.params.email
    Student.findAll({ where: {email: studentEmail}})
    .then(data => {
      res.render('students', {students: data, alert:''})
    })
    .catch(err => {
      res.render('error', {error: err})
    })
  }

  static delete(req, res) {
    Student.destroy({ where: {id: Number(req.params.id)}})
    .then(() => {
      res.redirect(`/students?message=Student id ${req.params.id} has been deleted&type=success`)
    })
    .catch(err => {
      res.render('error', {error: err})
    })
  }

  static validation(student) {
    let error = []

    if(!student.first_name) {
      error.push('First Name cannot be empty')
    }

    if(!student.last_name) {
      error.push('Last Name cannot be empty')
    }

    if(!student.email) {
      error.push('Email cannot be empty')
    } else {
      if(!student.email.includes('@')) {
        error.push('Wrong Email format')
      } else if(!student.email.includes('.')) {
        error.push('Wrong Email format')
      }
    }

    if(!student.gender) {
      error.push('Gender must be selected')
    }

    if(!student.birth_date) {
      error.push('Birth date cannot be empty')
    } else {
      const formatDate = student.birth_date.split('-')
      let date = new Date
      let year = date.getFullYear()  

      if(formatDate.length !== 3) {
        error.push('Date format should be YYYY-MM-DD')
      } else if(formatDate[1] < 1 || formatDate[1] > 12) {
        error.push('Invalid Month')
      } else if(Number(formatDate[0]) > year) {
        error.push('Invalid Year')
      } else if(formatDate[1] == 1 || formatDate[1] == 3 || formatDate[1] == 5 || formatDate[1] == 7 || formatDate[1] == 8 || formatDate[1] == 10 || formatDate[1] == 12) {
        if(formatDate[2] < 1 ||  formatDate[2] > 31 ) {
          error.push('Invalid Date')
        }
      } else if(formatDate[1] == 4 || formatDate[1] == 6 || formatDate[1] == 9 || formatDate[1] == 11) {
        if(formatDate[2] < 1 ||  formatDate[2] > 30 ) {
          error.push('Invalid Date')
        }
      }else if(formatDate[1] == 2) {
        if(formatDate[2] < 1 || formatDate[2] > 29) {
          error.push('Invalid Date')
        }
      }
    }
    return error
  }

}
module.exports = StudentsController