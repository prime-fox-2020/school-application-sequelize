const Subject = require('../models').Subject

class subjectController{
    static show(req,res){
        // console.log(Subject)
        Subject.findAll()
        .then(subject => {
            res.render('subject', { subject })
        })
        .catch(err => {
            res.redirect('/*')
        })
    }

    static findSubjectById(req, res) {
        Subject.findByPk(Number(req.params.id))
            .then(subjectRaw => {
                let subject = []
                subject.push(subjectRaw.dataValues)
                res.render('subject',  { subject } )
            })
            .catch(err => {
                res.redirect('/*')
            })
    }
}

module.exports = subjectController