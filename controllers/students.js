const { Student } = require('../models');

class StudentControllers {
    static show(req, res){
        Student.findAll({
            order: [
                ['id', 'asc']
            ]   
        })
        .then(data => {
            res.render('students', {students: data, alert: req.query})
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }

    static validation(data) {
        let error = []
        if (!data.firstName) {
            error.push('Fill in your first name!')
        }
        if (!data.lastName) {
            error.push('Fill in your last name!')
        }
        if (!data.email) {
            error.push('Fill in your email adress!')
        }else{
            if(!data.email.includes('@')){
                error.push('Invalid email!')
            }
        }
        if (!data.gender) {
            error.push('Choose your gender!')
        }
        if (!data.birthDate) {
            error.push('Fill in your date of birth!')
        } else {
            let date = data.birthDate.split('-')
            if (date.length !== 3) {
                error.push('Follow the date format! -> MM-DD-YYYY')
            } else if (Number(date[1] == NaN)) {
                error.push('Please write the Month in Number!')
            } else if (date[0] < 1 || date[0] > 31) {
                error.push('Invalid Date!')
            } else if (date[1] < 1 || date[0] > 12) {
                error.push('Invalid Month!')
            }
        }
        return error
    }

    static getAdd(req, res){
        const error = req.query.error
        res.render('addStudent', {error})
    }

    static add(req,res){
        const error = StudentControllers.validation(req.body)

        if (error.length > 0) {
            res.redirect(`/students/add?error=${error.join(', ')}`)
        } else {
            const temp = req.body.birthDate.split('-').reverse().join('-')
            const newDate = new Date(temp)
            Student.create({
                first_name : req.body.firstName,
                last_name : req.body.lastName,
                email : req.body.email,
                gender : req.body.gender,
                birth_date : newDate
            })
            .then( (data) => {
                const message = `New student has been added`
                res.redirect(`/students?message=${message}&type=success`)
            })
            .catch( err => {
                res.render('error', {error: err})
            })
        }
    }

    static getEdit(req, res) {
        const error = req.query.error
        Student.findByPk(Number(req.params.id))
        .then( data => {
            res.render('editStudent', {students: data, error})
        })
        .catch( err => {
            res.render('error', {error: err})
        })
    }

    static update(req, res) {
        const error = StudentControllers.validation(req.body)
        
        if (error.length > 0) {
            res.redirect(`/students/${req.body.studentId}/edit?error=${error.join(' ')}`)
        } else {
            Student.update({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                birth_date: req.body.birthDate
            }, {
                where: {
                    id : req.body.studentId
                }
            })
            .then(data => {
                const message = `Student with id ${req.body.studentId} has been edited !`
                res.redirect(`/students?message=${message}&type=success`)
            })
            .catch(err => {
                res.send(err)
            })
        }
    }

    static delete(req, res){
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            const message = `Student with id ${req.params.id} has been deleted.`
            res.redirect(`/students?message=${message}&type=danger`)
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }

    static getEmail(req, res) {
        Student.findAll({where: {email: req.params.email}})
            .then(data => {
                res.render('students', {students: data});
            })
            .catch(err => {
                res.render('error', {error: err})
            })
    }
}

module.exports = StudentControllers