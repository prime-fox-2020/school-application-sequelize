const { Teacher } = require('../models')

class TeacherController {
    static showTeacher(req, res){
        Teacher.findAll()
        .then(data => {
            res.render('teacher.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static validasi(data) {
        let error = []

        if(!data.first_name) {
            error.push('first name is required')
        }

        if(!data.last_name) {
            error.push('last name is required')
        }

        if(!data.email) {
            error.push('email is required')
        } else if(!data.email.includes('@') || !data.email.includes('.')){
            error.push('wrong format')
        }

        if(!data.gender) {
            error.push('gender is required')
        }

        return error
    }

    static addForm(req, res){
        const error = req.query.error
        res.render('addTeacher.ejs', {error})
    }

    static addPost(req, res){

        const error = TeacherController.validasi(req.body)

        if(error.length > 0){
            res.redirect(`/teachers/add?error=${error.join(',')}`)
        } else {
            Teacher.create({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender : req.body.gender
            })
            .then(data => {
                res.redirect('/teachers')
            })
            .catch(err => {
                res.send(err)
            })
        }
    }

    static delete(req, res){
        Teacher.destroy({
            where : {
                id : Number(req.params.id)
            }
        })
        .then(data => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editGet(req, res){
        Teacher.findByPk(Number(req.params.id))
        .then(data => {
            res.render('editTeacher', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editPost(req, res){
        Teacher.update({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            gender : req.body.gender
        } , {
            where : {
               id : req.params.id
            }
        })
        .then(data => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static findId(req, res){
        Teacher.findAll({
            where: {
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

module.exports = TeacherController