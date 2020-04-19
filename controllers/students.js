const { Student } = require('../models');

class StudentsController {
    static getAll(req, res){
        Student.findAll({
            order: [
                ['id', 'asc']
            ]   
        })
        .then(data => {
            res.render('students', {students: data})
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }

    static showForm(req, res) {
        let error = req.query
        res.render('addStudent', {error})
    }

    static validation(data) {
        let error = []
        
        if(!data.first_name || !data.last_name || !data.gender || !data.email || ! data.birth_date){
            error.push('Please fill all fields')
        }

        if(!data.email.includes('@') || !data.email.includes('.')){
            error.push('Please input the correct email address')
        }

        const birth_date = data.birth_date.split('-')
        if(birth_date.length !== 3){
            error.push('Please input birth date with dd-mm-yyyy format')
        } else {
            let dd = birth_date[0]
            let mm = birth_date[1]
            let yyyy = birth_date[2]

            if(dd.length > 2 || dd.length < 1 || mm.length > 2 || mm.length < 1 || yyyy.length !== 4){
                error.push('Please input birth date with dd-mm-yyyy format')
            } else {
                dd = Number(dd)
                mm = Number(mm)
                yyyy = Number(yyyy)

                if(dd < 1 || dd > 31){
                    error.push('Please input dd between 1 & 31')
                }

                if(mm < 1 || mm > 12){
                    error.push('Please input mm between 1 & 12')
                }

                if(yyyy < 2000 || yyyy > 2005){
                    error.push('Please input rational number for a junior high school student age')
                }
            }
        }    
        return error
    }

    static addProcess(req, res) {
        const error = StudentsController.validation(req.body)

        if (error.length > 0) {
            res.redirect(`/students/add?error=${error.join(', ')}`)
        } else {
            const temp = req.body.birth_date.split('-').reverse().join('-')
            const new_birth_date = new Date(temp)
            Student.create({
                first_name : req.body.first_name,
                last_name : req.body.last,
                email : req.body.email,
                gender : req.body.gender,
                birth_date : new_birth_date
            })
            .then(data => {
                res.redirect('/students')
            })
            .catch(err => {
                res.render('error', {error: err})
            })
        }
    }

    static deleteProcess(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }

    static showEditForm(req, res) {
        const error = req.query

        Student.findByPk(Number(req.params.id))
        .then( data => {
            res.render('editStudent', { students: data, error: error })
        })
        .catch( err => {
            res.render('error', {error: err})
        })
    }

    static editProcess(req, res) {
        const error = StudentsController.validation(req.body)
        
        if (error.length > 0) {
            res.redirect(`/students/${req.params.id}/edit?error=${error.join(' ')}`)
        } else {
            const temp = req.body.birth_date.split('-').reverse().join('-')
            const new_birth_date = new Date(temp)
            Student.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                birth_date: new_birth_date
            }, {
                where: {
                    id : req.params.id
                }
            })
            .then(data => {
                res.redirect('/students')
            })
            .catch(err => {
                res.render('error', { error: err })
            })
        }
    }

    static getByEmail(req, res){
        Student.findAll({where: {email: req.params.email}})
        .then(data => {
            res.render('students', {students: data})
        })
        .catch(err => {
            res.render('error', { error: err })
        })
    }
}


module.exports = StudentsController