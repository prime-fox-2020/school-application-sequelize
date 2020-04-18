const StudentsModel = require('../models/student')

class StudentsController {
    static showStudents(req, res) {
        res.render("students.ejs")
    }

    static getAddForm(req, res) {
        res.render("add-students.ejs")
    }

    // static postAdd(req, res) {

    // }

    static getEditForm(req, res) {
        res.render('edit-students.ejs')
    }
}

module.exports = StudentsController