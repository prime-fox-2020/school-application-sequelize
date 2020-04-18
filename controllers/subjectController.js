// const SubjectModel = require('../models/subjectModel')
const Subjects = require('../models').Subject

class SubjectController{
    // static subjectListGet(req,res){
    //     SubjectModel.getSubjectList((err,data) => {
    //         if (err){
    //             res.render('errorpage',{error:err})
    //         } else {
    //             res.render('subjectpage',{data})
    //         }
    //     })
    // }
    static subjectListGet(req,res){
        Subjects.findAll()
        // SubjectModel.getSubjectList()
        .then(data => {
            // console.log(result)
            res.render('subjectpage',{data})
        })
        .catch(error =>{
            res.render('errorpage',{error})
        })
        
    }

    // static subjectListIdGet(req,res){
    //     SubjectModel.getSubjectIdList(Number(req.params.id), (err,data)=> {
    //         if (err){
    //             res.render('errorpage',{error:err})
    //         } else {
    //             res.render('subjectpage',{data})
    //         }
    //     })
    // }
    static subjectListIdGet(req,res){
        Subjects.findAll({
            where: {id : Number(req.params.id)}
        })
        // SubjectModel.getSubjectIdList(Number(req.params.id))
        .then(data => {
            res.render('subjectpage',{data})
        })
        .catch(error => {
            res.render('errorpage',{error})
        })        
    }
}

module.exports = SubjectController