const express = require('express')
const { Student } = require('../models')

class ControllerStudent {
    static getAll(request, respond) {
        Student.findAll()
            .then(students => {
                // console.log(students)
                respond.render('students', { data: students })
            })
            .catch(err => {
                respond.render('error', { err })
            })
    }
    static getEmail(request, respond) {
        Student.findAll({ where: { email: request.params.email } })
            .then(find => {
                // console.log(find)
                respond.render('students', { data: find })
            })
            .catch(err => {
                respond.render('error', { err })
            })
    }
    static addStudent(request, respond) {
        const err = request.query.error
        respond.render('add_students', { error: err })
    }

    static postAdd(request, respond) {
        const err = ControllerStudent.validate(request.body)
        if (err.length > 0) {
            respond.render('add_students', { error: err })
        } else {
            Student.create({
                first_name: request.body.first_name,
                last_name: request.body.last_name,
                email: request.body.email,
                gender: request.body.gender,
                birth_date: request.body.birth_date
            })
                .then(add => {
                    respond.redirect('/students')
                })
                .catch(err => {
                    respond.render('error', { err })
                })
        }
    }
    static edit(request, respond) {
        let findId = Number(request.params.id)
        const error = request.query.error
        respond.render('edit_students', { id: findId, error })
        Student.findAll({ where: { id: findId } })
            .then(edit => {
                respond.render('edit_student', { id: findId, error })
            })
            .catch(err => {
                respond.render('error', { err })
            })
    }
    static postEdit(request, respond) {
        let findId = Number(request.params.id)
        const err = ControllerStudent.validate(request.body)
        if (err.length > 0) {
            respond.render('edit_students', { id:findId,error: err })
        } else {
            Student.update({
                first_name: request.body.first_name,
                last_name: request.body.last_name,
                email: request.body.email,
                gender: request.body.gender,
                birth_date: request.body.birth_date
            }, {
                where: { id: Number(request.params.id) }
            })
                .then(edit => {
                    respond.redirect('/students')
                })
                .catch(err => {
                    respond.render('error', { err })
                })
        }
    }
    static postDelete(request,respond){
        Student.destroy({
            where : {id : request.params.id}
        })
        .then(del =>{
            respond.redirect('/students')
        })
        .catch(err=>{
            respond.render('error',{err})
        })
    }
    static validate(input) {
        // console.log(input)
        let error = []
        if (!input.first_name) {
            error.push('Fill in your first name!')
        }
        if (!input.last_name) {
            error.push('Fill in your last name!')
        }
        if (!input.email) {
            error.push('Fill in your email adress!')
        } else {
            if (!input.email.includes('@')) {
                error.push('Invalid email!')
            } else if (!input.email.includes('@sekolah.id')) {
                error.push('Please use your school provided email')
            }
        }
        if (!input.gender) {
            error.push('Choose your gender!')
        }
        if (!input.birth_date) {
            error.push('Fill in your date of birth!')
            // } else {
            //     // console.log(input.birth_date)
            //     let date = input.birth_date.split('-')
            //     // console.log(date)
            //     if (date.length !== 3) {
            //         error.push('Follow the date format! -> DD-MM-YYYY')
            //     } else if (Number(date[1] == NaN)) {
            //         error.push('Please write the Month in Number!')
            //     } else if (date[0] < 1 || date[0] > 31) {
            //         error.push('Invalid Date!')
            //     } else if (date[1] < 1 || date[0] > 12) {
            //         error.push('Invalid Month!')
            //     }
        }
        return error
    }
}

module.exports = ControllerStudent