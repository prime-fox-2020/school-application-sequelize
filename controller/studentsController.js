const {Student}=require('../models')

class StudentsController{

    static validasi(req){
        let error=[]
        if(!req.body.fname){
            error.push('FirstName is required')
        }
        if(!req.body.lname){
            error.push('LastName is required')
        }
        if(!req.body.email){
            error.push('Email is required')
        }else if(req.body.email){
            if(!req.body.email.includes('@')){
                error.push('Format email is wrong')
            }
        }
        if(!req.body.gender){
            error.push('Gender is required')
        }else if(req.body.gender){
            if(req.body.gender!=='male'&&req.body.gender!=='female'){
                error.push('choose between male and female')
            }
        }

        if(!req.body.birthdate){
            error.push('Birthdate is required')
        }
        if(req.body.birthdate){
            const res=req.body.birthdate.split('-')
            if(res.length!==3){
                error.push('Format must be YYYY-MM-DD')
            }else if (res[1]<1||res[1]>12){
                error.push('Month must be 1-12')
            }else if (res[1]==1||res[1]==3||res[1]==5||res[1]==7||res[1]==8||res[1]==10||res[1]==12){
                if(res[2]<1||res[2]>31){
                    error.push('Invalid date')
                }
            }else if (res[1]==4||res[1]==6||res[1]==9||res[1]==11){
                if(res[2]<1||res[2]>30){
                    error.push('Invalid date')
                }
            }else if (res[1]==2){
                if(res[2]<1||res[2]>28){
                    error.push('Invalid date')
                }
            }
        }
        return error
    }

    static show(req,res){
        Student.findAll()
        .then(data=>{
            res.render('student',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static add(req,res){
        const err=req.query.error
        res.render('add',{err})
    }

    static addPost(req,res){
        let err=StudentsController.validasi(req)
        if(err.length>0){
            res.redirect(`/students/add?error=${err.join(',')}`)
        }else{
            const formatDate = new Date(req.body.birthdate)
            Student.create({
                first_name:req.body.fname,
                last_name:req.body.lname,
                email:req.body.email,
                gender:req.body.gender,
                birth_date:formatDate
            }).then(data=>{
                res.redirect('/students')
            }).catch(err=>{
                res.send(err)
            })
        }
    }

    static delete(req,res){
        Student.destroy({
            where:{
                id:Number(req.params.id)
            }
        }).then(data=>{
            res.redirect('/students')
        }).catch(err=>{
            res.send(err)
        })
    }

    static editGet(req,res){
        Student.findOne({
            where:{
                id:Number(req.params.id)
            },
             attributes: ['id','first_name', 'last_name', 'email', 'gender', 'birth_date'],
        }).then(data=>{
            const err=req.query.error
            res.render('edit',{data,err})
        }).catch(err=>{
            res.send(err)
        })
    }

    static editPost(req,res){
        let err=StudentsController.validasi(req)
        if(err.length>0){
            res.redirect(`/students/${Number(req.params.id)}/edit?error=${err.join(',')}`)
        }else{
        Student.update({
            first_name:req.body.fname,
            last_name:req.body.lname,
            email:req.body.email,
            gender:req.body.gender,
            birth_date:req.body.birthdate
        },{
            where:{
                id:Number(req.params.id)
            },
        }).then(data=>{
            res.redirect('/students')
        }).catch(err=>{
            res.send(err)
        })
        }
    }

    static email(req,res){
        Student.findOne({
            where:{
                email:req.params.email
            },
            attributes: ['id','first_name', 'last_name', 'email', 'gender', 'birth_date'],
        }).then(data=>{
            res.render('student',{data:[data]})
        }).catch(err=>{
            res.send(err)
        })
    }

    static postData(req,res){
        Student.findOne({
            where:{
                email:req.body.search
            },
        }).then(data=>{
            res.render('student',{data:[data]})
        }).catch(err=>{
            res.send(err)
        })
    }
}

module.exports=StudentsController