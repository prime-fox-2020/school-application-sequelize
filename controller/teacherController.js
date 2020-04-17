const Teacher = require('../models').Teacher

class teacherController{
    static show(req,res){
        // console.log(Teacher)
        Teacher.findAll()
        .then(teacher => {
            res.render('teacher', { teacher })
        })
        .catch(err => {
            res.redirect('/*')
        })
    }

    
    static findTeacherById(req, res) {
        Teacher.findByPk(Number(req.params.id))
            .then(teacherRaw => {
                let teacher = []
                teacher.push(teacherRaw.dataValues)
                res.render('teacher',  { teacher } )
            })
            .catch(err => {
                res.redirect('/*')
            })
    }
}

module.exports = teacherController