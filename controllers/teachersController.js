const { Teacher } = require('../models')

class TeachersController {

  static getTeachers(req,res){
    Teacher.findAll()
    .then(data=>{
      res.render('teachers', { data })
    }).catch(error=>{
      res.render('error', {error})
    })
  }

  static getId(req, res){
    Teacher.findAll({ where: { id: Number(req.params.id) }})
    .then(data=>{
      res.render('teachers', { data: data, alert: '' })
    }).catch(error=>{
      res.render('error', {error})
    })
  }
}

module.exports = TeachersController