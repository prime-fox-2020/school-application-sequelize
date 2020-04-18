const Student = require('../models').student

class StudentController {
    static list(req, res){
        Student.findAll()
        .then( data => {
            res.render('students', {students:data})
        })
        .catch( err => {
            res.render('error', err)
        })
    }

    static getById(req, res){
        Student.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        .then( data => {
            res.render('students', {students : [data]})
        })
        .catch( err => {
            res.render('error', err)
        })
    }
}

module.exports = StudentController