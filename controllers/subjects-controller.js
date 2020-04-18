const SubjectsModel = require('../models/subject')

class SubjectsController {
    static showSubjects(req, res) {
        res.render('subjects.ejs')
    }

    static getAddForm(req, res) {
        res.render('add-subjects')
    }

    // static postAdd(req, res) {

    // }

    static getEditForm(req, res) {
        res.render("edit-subjects.ejs")
    }
}

module.exports = SubjectsController