const Subject = require('../models').subject

class SubjectController {
    static list(req, res){
        Subject.findAll()
        .then( data => {
            res.render('subjects', {subjects:data})
        })
        .catch( err => {
            res.render('error', err)
        })
    }

    static getById(req, res){
        Subject.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        .then( data => {
            res.render('subjects', {subjects : [data]})
        })
        .catch( err => {
            res.render('error', err)
        })
    }
}

module.exports = SubjectController