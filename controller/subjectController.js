const {Subject}=require('../models')

class SubjectController{
    static show(req,res){
        Subject.findAll()
        .then(data=>{
            res.render('subject',{data})
        }).catch(err=>{
            res.send(err)    
        })
    }

    static getData(req,res){
        Subject.findOne({
            where:{
                id:Number(req.params.id)
            }
        }).then(data=>{
            res.render('subject',{data:[data]})
        }).catch(err=>{
            res.send(err)    
        })
    }

    static postData(req,res){
        Subject.findOne({
            where:{
                id:req.body.search
            },
        }).then(data=>{
            res.render('subject',{data:[data]})
        }).catch(err=>{
            res.send(err)
        })
    }
}

module.exports=SubjectController