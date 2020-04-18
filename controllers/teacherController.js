// const TeacherModel = require('../models/teacherModel')
const Teachers = require('../models').Teacher

class TeacherController{
    // static teacherListGet(req, res){
    //     TeacherModel.getTeacherList((err,data) =>{
    //         if (err){
    //             res.render('errorpage', { error : err} )
    //         } else {
    //             res.render('teacherpage', {data})
    //         }
    //     })
    // }
    static teacherListGet(req, res){
        Teachers.findAll()
        // TeacherModel.getTeacherList()
        .then(data => {
            res.render('teacherpage', {data})
        })
        .catch(error => {
            res.render('errorpage', { error} )
        })
    }

    // static teacherListIdGet(req,res){
    //     TeacherModel.getTeacherIdList(Number(req.params.id), (err,data) => {
    //         if (err){
    //             res.render('errorpage', {error:err})
    //         } else {
    //             res.render('teacherpage',{data})
    //         }
    //     })
    // }
    static teacherListIdGet(req,res){
        Teachers.findAll({
            where: {id:Number(req.params.id)}
        })
        // TeacherModel.getTeacherIdList(Number(req.params.id))
        .then(data => {
            res.render('teacherpage',{data})
        })
        .catch(error => {
            res.render('errorpage', {error})
        })
    }
}

module.exports = TeacherController