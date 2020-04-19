const Teacher = require('../models').Teacher

class TeacherController{
    static get(req, res){
        Teacher.findAll().then(data => {
            // projects will be an array of all Project instances
            res.render('teacher', {object : data})
          })
    }
}

module.exports = TeacherController