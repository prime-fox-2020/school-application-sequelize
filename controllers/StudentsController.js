const Student = require('../models').Student

class StudentsController {
    static show (req, res){
        Student.findAll()
        .then(students => {
            res.render('students', { students: students })
        }).catch(err => {
            res.send(err)
        })
    }

    static showAdd (req, res) {
        res.render('addstudents')
    }

    static add (req, res) {
        Student.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            gender: req.body.gender,
            birthDate: req.body.birthDate
        }).then(data => {
            res.redirect('/students')
        }).catch(err => {
            res.send(err)
        })
    }

    static delete (req, res) {
        Student.destroy({
            where: {id: req.params.id}
        }).then(data => {
            res.redirect('/students')
        }).catch(err => {
            res.send(err)
        })
    }

    static showEdit (req, res) {
        Student.findAll({
            where: {id: req.params.id}
        }).then(data => {
            // res.send(data)
            res.render('editstudents', { studentData: data[0] })
        }).catch(err => {
            res.send(err)
        })
    }

    static edit (req, res) {
        Student.update(req.body, {
            where: {id: req.params.id}
        }).then(data => {
            res.redirect('/students')
        }).catch(err => {
            res.send(err)
        })
    }
}

module.exports = StudentsController