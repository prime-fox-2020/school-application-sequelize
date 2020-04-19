const Student = require('../models').Student

class StudentController{
    static get(req, res){
        Student.findAll()
        .then(data => {
            // projects will be an array of all Project instances
            res.render('student', {object : data})
          })
          .catch(err =>{
            res.send(err)
        })
    }

    static addForm(req, res){
        res.render('addform')
    }
    static add(req, res){
        // res.send(req.body)
        Student.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            birth_date: req.body.birth_date
        }).then(data=>{
            res.redirect('../student')
        }).catch(err=>{
            res.send(err)
        })
    }

    static editForm(req, res) {
        Student.findAll({
            where: {
                id: Number(req.params.id)
            }
        }).then(data => {
            // res.send(data)
            res.render('editform', {object: data})
        }).catch(err =>{
            res.send(err)
        })
    }

    static edit(req, res){
        Student.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            birth_date: req.body.birth_date
        },{
            where:{
                id: req.params.id
            }
        }).then(data => {
            res.redirect('/student')
        }).catch(err =>{
            res.send(err)
        })
    }

    static delete(req, res){
        Student.destroy({
            where:{
                id: Number(req.params.id)
            }
        }).then(data =>{
            res.redirect('/student')
        }).catch(err =>{
            res.send(err)
        })
    }
}

module.exports = StudentController