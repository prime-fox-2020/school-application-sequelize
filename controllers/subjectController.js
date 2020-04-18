const { Subject } = require('../models')

class SubjectController{
    
    static showSubject(req, res){
        Subject.findAll()
        .then(data => {
            res.render('subject.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static validasi(data) {
        let error = []

        if(!data.subject_name) {
            error.push('subject name name is required')
        }
        return error
    }

    static addForm(req, res) {
        const error = req.query.error
        res.render('addSubject.ejs', {error})
    }

    static addPost(req, res){

        const error = SubjectController.validasi(req.body)

        if(error.length > 0) {
            res.redirect(`/subjects/add?error=${error.join(',')}`)
        } else {
            Subject.create({
                subject_name : req.body.subject_name
            })
            .then(data => {
                res.redirect('/subjects')
            })
            .catch(err => {
                res.send(err)
            })
        }
    }

    static delete(req, res){
        Subject.destroy({
            where: {
                id : Number(req.params.id)
            }
        })
        .then(data => {
            res.redirect('/subjects')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editGet(req, res){
        Subject.findByPk(Number(req.params.id))
        .then(data => {
            res.render('editSubject.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })

    }

    static editPost(req, res){
        Subject.update({
            subject_name : req.body.subject_name
        }, {
            where : {id :req.params.id}
        })
        .then(data => {
            res.redirect('/subjects')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static findId(req, res){
        Subject.findAll({
            where : {
                id : req.params.id
            }
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = SubjectController