let Model = require('../modelis/studentsModel')
const Student = require('../models').Student

class StudentController {
    static getStudent(req,res){
        Student.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        .then(data =>{
            res.render('../views/students.ejs', {data: data})
        })
        .catch(err =>{
            res.send(err)
        })
    }
    
    static getStudentEmail(req,res){
        Student.findAll({where: {email: req.params.email}})
        .then(data =>{
            console.log(data)
            res.render('../views/students.ejs', {data: data})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addStudent(req,res){
        res.render('../views/addStudent.ejs')
    }

    static editStudent(req,res){
        Student.findAll({
            where: {id: Number(req.params.id)}
        })
        .then(data =>{
            console.log(data)
            res.render('../views/editStudent.ejs', {data: data})
        })
        .catch(err =>{
            res.send(err)
        })
        // Model.readStudentId(req.params.id, (err,data)=>{
        //     if(err) console.log(err)

        //     res.render('../views/editStudent.ejs', {data: data})
        // })
    }

    static deleteStudent(req,res){
        Student.destroy({
            where: {id: Number(req.params.id)}
        })
        .then(data =>{
            console.log('berhasil ngapus')
            res.redirect('/students')
        })
        .catch( err=>{
            res.send(err)
        })
    }

    static addStudentPost(req,res){
        let fname = req.body.fname
        let lname = req.body.lname
        let email = req.body.email
        let gender = req.body.gender
        let birthDate = req.body.birthdate
        let splitted = birthDate.split('-')
        if(splitted.length < 3 || fname.length < 1 || lname.length < 1 || email.length < 1 || gender.length < 1){
            res.send(`Form shouldn't be empty or invalid birthdate format`)
        } else {
            let flag = false
            for(let a = 0; a < email.length; a++){
                if(email[a] == '@' && email.split('.').length == 2){
                    flag = true
                    Student.create({
                        first_name: fname,
                        last_name: lname,
                        email: email,
                        gender: gender,
                        birthdate: birthDate
                    })
                    .then(data =>{
                        res.redirect('/students')
                    })
                    .catch(err=>{
                        res.send(err)
                    })
                }
            }
            if(!flag){
                res.send('Invalid email')
            }
            
        }
    }

    static editStudentPost(req,res){
        let id = req.params.id
        let fname = req.body.fname
        let lname = req.body.lname
        let email = req.body.email
        let gender = req.body.gender
        let birthDate = req.body.birthdate
        let splitted = birthDate.split('-')
        if(splitted.length < 3 || fname.length < 1 || lname.length < 1 || email.length < 1 || gender.length < 1){
            res.send(`Form shouldn't be empty or invalid birthdate format`)
        } else {
            let flag = false
            for(let a = 0; a < email.length; a++){
                if(email[a] == '@' && email.split('.').length == 2){
                    flag = true
                    Student.update({
                        first_name: fname,
                        last_name: lname,
                        email: email,
                        gender: gender,
                        birthdate: birthDate
                    },{
                        where: {id: id}
                    })
                    .then(data =>{
                        console.log(`Successfully editing student with id ${id}`)
                        res.redirect('/students')
                    })
                    .catch(err=>{
                        res.send(err)
                    })
                }
            }
            if(!flag){
                res.send('Invalid email')
            }
            
        }
        // Model.editStudent(id, fname, lname, email, gender, birthDate)
        // .then( data =>{
        //     console.log(`Successfully editing student with id ${id}`)
        //     res.redirect('/students')
        // })
        // .catch( err=>{
        //     console.log(err)
        // })
    }
}
module.exports = StudentController