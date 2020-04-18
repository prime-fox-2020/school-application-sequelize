const Teacher = require('../models').teacher

class TeacherController {
    static list(req, res){
        Teacher.findAll()
        .then( data => {
            res.render('teachers', {teachers:data})
        })
        .catch( err => {
            res.render('error', err)
        })
    }

    static getById(req, res){
        Teacher.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        .then( data => {
            res.render('teachers', {teachers : [data]})
        })
        .catch( err => {
            res.render('error', err)
        })
    }
}

module.exports = TeacherController