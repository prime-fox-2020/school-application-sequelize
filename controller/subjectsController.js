// const SM = require('../model/subjectsModel');

const {Subjects} = require('../models');

class SubjectController {

  static subjectList(req, res) {
    Subjects.findAll()
    // SM.getSubject()
    .then(data => {
         return res.render('subjects', {data})
      })
      .catch(err =>{
         throw err
      })
  }

  static subjectListId(req, res) {
    Subjects.findAll({where: {id: req.params.id }})
    // SM.getSubjectId(req.params.id)
    .then(data => {
         return res.render('subjects', {data})
      })
      .catch(err =>{
         throw err
      })
  }


}

module.exports = SubjectController;
