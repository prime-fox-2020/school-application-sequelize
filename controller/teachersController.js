// const TM = require('../model/teachersModel');

const Teachers = require('../models').Teachers;

class TeacherController {

  static teacherList(req, res) {
    // TM.getTeacher()
    Teachers.findAll()
    .then(data => {
         return res.render('teachers', {data})
      })
      .catch(err =>{
         throw err
      })
  }

  static teacherListId(req, res) {
    Teachers.findAll({where:{id: req.params.id}})
    // TM.getTeacherId(req.params.id)
    .then(data => {
         return res.render('teachers', {data})
      })
      .catch(err =>{
         throw err
      })
  }

}

module.exports = TeacherController;
