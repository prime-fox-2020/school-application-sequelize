const {Teacher}=require('../models')

class TeacherController{
    static show(req,res){
        Teacher.findAll()
        .then(data=>{
            res.render('teacher',{data})
        }).catch(err=>{
            res.send(err)
        })
    }

    static getData(req,res){
        Teacher.findOne({
            where:{
                id:Number(req.params.id)
            }
        }).then(data=>{
            res.render('teacher',{data:[data]})
        })
    }

    static postData(req,res){
        Teacher.findOne({
            where:{
                id:req.body.search
            },
        }).then(data=>{
            res.render('teacher',{data:[data]})
        }).catch(err=>{
            res.send(err)
        })
    }
}

module.exports=TeacherController