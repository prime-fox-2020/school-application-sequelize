const { Student } = require('../models')

class StudentsController {

  static getStudents(req, res){
    Student.findAll()
    .then(data=>{
      res.render('students', { data, alert: req.query })
    }).catch(error=>{
      res.render('error', {error})      
    })
  }

  static addGet(req, res){
    const error = req.query.error
    res.render('add', {error})
  }

  static addPost(req, res){
    let error = StudentsController.validate(req.body)
    let names = `${req.body.firstName} ${req.body.lastName}` 

    if(error.length > 0){
      res.redirect(`/students/add?error=${error.join(', ')}`)
    } else {
      Student.create(req.body)
      .then(()=>{
        res.redirect(`/students?message=${names} has been success add to students list&type=success`)
      }).catch(error=>{
        res.render('error', {error})
      })
    }
  }

  static delete (req, res){
    Student.destroy({ where: { id: Number(req.params.id) }})
    .then(id=>{
      res.redirect(`/students?message=Student with id: ${id} has been deleted!&type=success`)
    }).catch(error=>{
      res.render('error', {error})
    })
  }

  static editGet(req, res){
    const error = req.query.error
    Student.findAll({ where: { id: Number(req.params.id) }})
    .then(data=>{
      res.render('edit', { data, error })
    }).catch(error=>{
      res.render('error', {error})
    })
  }

  static editPost(req, res){
    let error = StudentsController.validate(req.body)
    
    if(error.length > 0){
      res.redirect(`/students/${req.params.id}/edit?error=${error.join(', ')}`)
    } else {
      Student.update({
        id: Number(req.params.id),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,  
        birth_date: req.body.birth_date
      }, { where: { id: Number(req.params.id) }})
      .then(()=>{        
        res.redirect(`/students?message=Student with id: ${req.params.id} has been succeess edited!&type=success`)
      })
      .catch(error=>{
        res.redirect(`/students/${req.params.id}/edit?error=${error.join(', ')}`)
      })
    }
  }

  static getEmail(req, res){
    Student.findAll({ where: { email: req.params.email }})
    .then(data=>{
      res.render('students', { data, alert: '' })
    }).catch((error)=>{
      res.render('error', {error})
    })
  }

  static validate(student){
    let error = []

    if(!student.firstName) error.push(`First Name is required`)
    if(!student.lastName) error.push(`Last Name is required`)
    if(!student.email) {
      error.push(`Email is required`)
    }else if(!student.email.includes('@') || !student.email.includes('.')) {
      error.push(`Wrong format email`)
    }
    if (student.birth_date.includes('-')){
      let date = student.birth_date
      let temp = date.split('-')
      for (let i = 0; i < temp.length; i++) temp[i] = Number(temp[i])
      
      if (temp[0] < 1700||temp[0] > 2020) {
        error.push(`Birth date format should be YYYY-MM-DD`)
      }else if (temp[1] < 1||temp[1] > 12) {
        error.push(`Birth date format should be YYYY-MM-DD`)
      }else if (temp[2] < 1||temp[2] > 31) {
        error.push(`Birth date format should be YYYY-MM-DD`)
      } 
    } else {
      error.push(`Birth date format should be YYYY-MM-DD`)
    }
    return error
  }

}

module.exports = StudentsController