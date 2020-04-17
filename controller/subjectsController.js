const Subject = require('../models').Subject

class SubjectsController {

  static getSubjects(req, res) {
    Subject.findAll()
    .then((data) => {
      res.render('subjects', {subjects: data})
    })
    .catch(err => {
      res.render('error', {error:err})
    })
  }

  static getId(req, res) {
    Subject.findAll({where: {id: req.params.id}})
    .then(data => {
      res.render('subjects', {subjects:data})
    })
    .catch(err => {
      res.render('error', {error:err})
    })
  }
  
}

module.exports = SubjectsController