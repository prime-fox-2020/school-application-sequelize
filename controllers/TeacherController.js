let Model = require('../modelis/teachersModel')
const Teacher = require('../models').Teacher

class TeacherController {
    static getTeacher(req,res){
        Teacher.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        .then(data =>{
            res.render('teachers.ejs', {data: data})
        })
        .catch( err =>{
            res.send(err)
        })
        // Model.readTeacher((err,data)=>{
        //     if(err) res.send(err)

        //     res.render('teachers.ejs', {data: data})
        // })
    }

    static getTeacherId(req,res){
        Teacher.findByPk(Number(req.params.id))
        .then(data =>{
            console.log(data.dataValues, 'wakwaw')
            res.render('teachers.ejs', {data: [data.dataValues]})
        })
        .catch( err =>{
            res.send(err)
        })
        // Model.readTeacherId(req.params.id, (err,data)=>{
        //     if(err) res.send(err)

        //     console.log(data) //sampe sini gk salah
        //     res.render('teachers.ejs', {data: data})
        // })
    }
}

module.exports = TeacherController