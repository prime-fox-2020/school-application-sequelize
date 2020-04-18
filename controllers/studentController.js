// const StudentModel = require('../models/studentModel')
const Students = require('../models').Student

class StudentController{
    
    static studentListGet(req, res){
        Students.findAll()
        .then(data => {
            res.render('studentpage',{data})
        })
        .catch(error => {
            res.render('errorpage',{error})
        })
    }
    
    static addStudentGet(req,res){
        const error = req.query.error
        res.render('addstudent',{error})
    }
    
    static addStudentPost(req,res){
        // console.log(req.body)
        let error = StudentController.validation(req.body)
        if (error.length > 0){
                // res.redirect(`/student/add?error=${error.join(', ')}`)
                res.render('addstudent',{error})
        } else {
            Students.create({
                first_name: req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender : req.body.gender,
                birth_date : req.body.birth_date
            })
            .then(data => {
                res.redirect('/student')
                // res.render('studentpage',{data})
            } )
            .catch(error => {
                res.render('errorpage',{error})
            } )
        }
    }

    static editStudentGet(req,res){
        const error = req.query.error
        Students.findAll({
            where: {    id:Number(req.params.id)   }
        })
        .then(data => {
            // console.log(data)
            res.render('editstudent',{data,error})
        })
        .catch(error => {
            res.render('errorpage',{error})
        })
    }

    static editStudentPost(req,res){
        let error = StudentController.validation(req.body)
        if (error.length > 0){
            res.redirect(`/student/${req.params.id}/edit?error=${error.join(', ')}`)
        } else {
            Students.update({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender : req.body.gender,
                birth_date : req.body.birth_date
            }, { 
                where : {id : Number(req.params.id) }
            })
            .then(data=> {
                res.redirect('/student')
            } )
            .catch(error => {
                res.render('errorpage',{error})
            })
        }
    }

    static deleteStudentGet(req,res){
        Students.destroy({
            where: { id : Number(req.params.id) },
            
        })
        // StudentModel.deleteStudentGet(Number(req.params.id))
        .then(data => {
            res.redirect('/student')})
        .catch(error => {
            res.render('errorpage',{error})
        })
    }

    static emailStudentGet(req,res){
        Student.findAll({
            where: {email:req.params.email}
        })
        // StudentModel.emailStudentGet(req.params.email)
        .then(data => {
            console.log(data)
            res.render('studentpage', {data})
        })
        .catch(error => {
            res.render('errorpage',{error})
        })
    }

    static validation(data){
        let error = []
        if (!data.first_name){
            error.push(`First Name Kosong`)
        }
        if (!data.last_name){
            error.push(`Last Name Kosong`)
        }   
        if (!data.email){
            error.push(`Invalid Email Input`)
        } else {
            if (!data.email.includes('@')){
                error.push(`Invalid Email Input`)
            }
        }
        if (!data.gender){
            error.push(`Gender Kosong`)
        }
        if (!data.birth_date){
            error.push(`Birth Date Kosong`)
        } 
        // else {
        //     let birth = data.birth_date.split('-')
        //     let date = birth[0]
        //     let month = birth[1]
        //     if (birth.length !== 3){
        //         error.push(`Invalid date`)
        //     }else {
        //         if (month<1 || month>12){
        //             error.push(`Invalid Month`)
        //         } else {
        //             if (date< 1 || date > 32){
        //                 error.push(`Invalid Date`)
        //             }
        //         } 
        //     }
        // }
        return error
    }
}

module.exports = StudentController