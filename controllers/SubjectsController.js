const Subject = require('../models').Subject

class SubjectsController{
    static getPage(req, res){
        // res.send('MASUK PAGE SUBJECT')

        Subject.findAll()
        .then( data => {
            res.render('subjects', {data})
        })
        .catch( err => {
            res.render('error', {err})
        })
    }

    static pageWithId(req, res){
        // res.send('MASUK ID SUBJECT')
        Subject.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
        .then( data => {
            res.render('subjects', {data : [data]})
        })
        .catch( err => {
            res.render('error', err)
        })
    }
}

module.exports = SubjectsController