const Teacher = require('../models').Teacher

class TeachersController{
    static getPage(req, res){
        Teacher.findAll()
        .then( data => {
            res.render('teachers', {data})
        })
        .catch( err => {
            res.render('error', err)
        })
    }

    static pageWithId(req, res){
        Teacher.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        .then( data => {
            res.render('teachers', {data : [data]})
        })
        .catch( err => {
            res.render('error', err)
        })
    }
}

module.exports = TeachersController