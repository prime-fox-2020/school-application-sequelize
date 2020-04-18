const subjectModel = require('../models').Subject

class SubjectController {
    static getSubjectList (req, res) {
        subjectModel.findAll()
        .then(data => {
            res.render('subject.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getSubjectId (req, res) {
        subjectModel.findByPk(Number(req.params.id))
        .then(data => {
            res.render('subject.ejs', { data : [data.dataValues] })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = SubjectController;