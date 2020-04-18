const TeachersModel = require('../models/teacher')

class TeachersController {
    static showTeachers(req, res) {
        res.render("teachers.ejs")
    }

    static getAddForm(req, res) {
        res.render("add-teachers.ejs")
    }

    // static postAddForm(req, res) {
    //     res.redirect('/teachers')
    // }

    static getEditForm(req, res) {
        res.render("edit-teachers.ejs")
    }
}

module.exports = TeachersController