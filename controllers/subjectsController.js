const { Subject } = require('../models')

class SubjectsController {

  static getSubjects(req,res){
    Subject.findAll()
    .then(data=>{
      res.render('subjects', { data })
    }).catch(error=>{
      res.render('error', {error})
    })
  }

  static getId(req, res){
    Subject.findAll({ where: { id: Number(req.params.id) }})
    .then(data=>{
      res.render('subjects', { data: data, alert: '' })
    }).catch(error=>{
      res.render('error', {error})
    })
  }
}

module.exports = SubjectsController