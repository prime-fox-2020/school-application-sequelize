const studentsModel = require('../models').Student


class StudentsController {
    static getStudentsList (req, res) {
        studentsModel.findAll()
        .then(data => {
            res.render('students.ejs', {data})
        })
        .catch (err => {
            res.send(err)
        })
    }

    static addStudent (req, res) {
        res.render('add_student.ejs')
    }

    static postStudent (req, res) {
        let data = req.body;
        if (data.birth_date.length < 3 || data.first_name.length < 1 || data.last_name.length < 1 || data.email.length < 1 || data.gender.length < 1) {
            res.send('Data invalid')
        }
        else {
            studentsModel.create(req.body)
            .then (data => {
                console.log(req.body)
                res.redirect('/students')
            })
            .catch (err => {
                res.send(err)
            })
        }
    }

    static getEditStudent (req, res) {
        studentsModel.findAll({ where : {id : req.params.id}})
        .then (data => {
            res.render('edit_student.ejs', {
                paramId : req.params.id,
                populatedStudent : data
            })
        })
        .catch (err => {
            res.send(err)
        })
    }

    static postEditStudent (req, res) {
        let id = req.params.id;
        let first_name = req.body.firstname;
        let last_name = req.body.lastname;
        let email = req.body.email;
        studentsModel.update({
            first_name : first_name,
            last_name : last_name,
            email : email
        }, {where : {
            id : id
            }
        })
        // studentsModel.postEditStudents(id, first_name, last_name, email)
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteStudent (req, res) {
        studentsModel.destroy({ where : {id: req.params.id}})
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send('Unable to delete data')
        })
    }

    static getEmail (req, res) {
        studentsModel.findAll({ where : {email : req.params.email}})
        .then(data => {
            res.render('students.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = StudentsController;