const Student = require('../models').student

class StudentController {
    static list(req, res) {
        Student.findAll()
            .then(data => {
                res.render('students', { students: data })
            })
            .catch(err => {
                res.render('error', err)
            })
    }

    static getById(req, res) {
        Student.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
            .then(data => {
                res.render('students', { students: [data] })
            })
            .catch(err => {
                res.render('error', err)
            })
    } 
    static addForm(req, res) {
        res.render('addStudents')
    }

    static add(req, res) {
        const check = StudentController.validate(req.body)
        if (check.length > 0) {
            res.redirect(`/students?err=${check.join(',')}`)
        } else {
            Student.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                birthDate: req.body.birthDate
            })
                .then(() => {
                    res.redirect(`/students`)
                })
                .catch(err => {
                    // res.redirect(`/students/add`)
                    res.send(err)
                })
        }
    }

    static delete(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect(`/students`)
            })
            .catch(err => {
                res.render('error', { err })
            })
    }

    static editForm(req, res) {
        Student.findByPk(Number(req.params.id))
            .then(data => {
                res.render('editStudents', {student: data })
            })
            .catch(err => {
                res.render('error', { err })
            })
    }

    static edit(req, res) {
        const check = StudentController.validate(req.body)
        if (check.length > 0) {
            res.redirect(`/students/edit/${req.params.id}?err=${check.join(',')}`)
        } else {
            Student.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                birthDate: req.body.birthDate
            }, {
                where: {
                    id: Number(req.params.id)
                }
            }
            )
                .then(() => {
                    res.redirect('/students')
                })
                .catch(err => {
                    res.render('error', { err })
                })
        }
    }

    static getByEmail(req, res){
        Student.findOne({
            where: {
                email: req.params.email
            }
        })
        .then( data => {
            res.render('students', {student : [data]})
        })
        .catch( err => {
            res.render('error', err)
        })
    }
    
    static validate(data) {
        const error = []
        if (!data.firstName) {
            error.push('name must be filled')
        }
        if (!data.email) {
            error.push('email must be filled')
        }
        else {
            if (!data.email.includes('@')) {
                error.push('format email must be correct')
            }
            else if (!data.email.includes('@sekolah.id')) {
                error.push('email used must be ended with @sekolah.id')
            }
        }
        if (!data.gender) {
            error.push('gender must be selected')
        }
        if (!data.birthDate) {
            error.push('birth date must be filled')
        }
        else {
            const arr = data.birthDate.split('-')
            if (arr.length !== 3) {
                error.push('Format date must be DD-MM-YYYY')
            }
            else if (isNaN(arr[0]) || isNaN(arr[1]) || isNaN(arr[2])) {
                error.push('Invalid input date')
            }
            else if (Number(arr[1]) < 1 || Number(arr[1]) > 12) {
                error.push('Input for month should be valid')
            }
            else if (Number(arr[1]) === 1 || Number(arr[1]) === 3 || Number(arr[1]) === 5 || Number(arr[1]) === 7 || Number(arr[1]) === 8 || Number(arr[1]) === 10 || Number(arr[1]) === 12) {
                if (Number(arr[0]) < 1 || Number(arr[0]) > 31) {
                    error.push('Input for date should be valid')
                }
            }
            else if (Number(arr[1]) === 4 || Number(arr[1]) === 6 || Number(arr[1]) === 9 || Number(arr[1]) === 11) {
                if (Number(arr[0]) < 1 || Number(arr[0]) > 30) {
                    error.push('Input for date should be valid')
                }
            }
            else if (Number(arr[1]) === 2) {
                if (Number(arr[0]) < 1 || Number(arr[0]) > 29) {
                    error.push('Input for date should be valid')
                }
            }
        }
        return error
    }
}

module.exports = StudentController