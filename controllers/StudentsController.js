const Student = require('../models').Student

class StudentsController{
    static getPage(req, res){
        const alert = req.query
        Student.findAll()
        .then( data => {
            res.render('students', {data, alert})
        })
        .catch( err => {
            res.render('error', err)
        })
    }

    static getPageWithEmail(req, res){
        Student.findOne({
            where: {
                email: req.params.email
            }
        })
        .then( data => {
            res.render('students', {data : [data]})
        })
        .catch( err => {
            res.render('error', err)
        })
    }

    static add(req, res){
        const alert = req.query
        res.render('add', {alert})
    }

    static addPost(req, res){
        const check = StudentsController.validate(req.body)
        if(check.length > 0){
            res.redirect(`/students/add?msg=${check.join(', ')}`)
        } else {
            const temp = req.body.birth_date.split('-').reverse().join('-')
            const formatDate = new Date(temp)
            Student.create({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender : req.body.gender,
                birth_date : formatDate
            })
            .then( () => {
                const msg = `New student added to table`
                res.redirect(`/students?msg=${msg}`)
            })
            .catch( err => {
                res.render('error', {err})
            })
        }
    }

    static delete(req, res){
        Student.destroy({
            where: {
                id : req.params.id
            }
        })
        .then( () => {
            const msg = `Student with id ${req.params.id} data has been deleted`
            res.redirect(`/students?msg=${msg}`)
        })
        .catch( err => {
            res.render('error', {err})
        })
    }

    static edit(req, res){
        const alert = req.query
        Student.findByPk(Number(req.params.id))
        .then( data => {
            res.render('edit', {data, alert})
        })
        .catch( err => {
            res.render('error', {err})
        })
    }

    static editPost(req, res){
        const check = StudentsController.validate(req.body)
        if(check.length > 0){
            res.redirect(`/students/edit/${req.params.id}?msg=${check.join(',')}`)
        } else {
            const temp = req.body.birth_date.split('-').reverse().join('-')
            const formatDate = new Date(temp)
            Student.update({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender : req.body.gender,
                birth_date : formatDate
            }, { where: {
                    id : Number(req.params.id)
                }}
            )
            .then( () => {
                const msg = `Successfully edit student data with id ${req.params.id}`
                res.redirect(`/students?msg=${msg}`)
            })
            .catch( err => {
                res.render('error', {err})
            })
        }
    }

    static validate(data){
        const error = []
        if(!data.first_name){
            error.push('name must be filled')
        }
        if(!data.email){
            error.push('email must be filled')
        }
        else{
            if(!data.email.includes('@')){
                error.push('format email must be correct')
            }
            else if(!data.email.includes('@sekolah.id')){
                error.push('email used must be ended with @sekolah.id')
            }
        }
        if(!data.gender){
            error.push('gender must be selected')
        }
        if(!data.birth_date){
            error.push('birth date must be filled')
        }
        else{
            const arr = data.birth_date.split('-')
            if(arr.length !== 3){
                error.push('Format date must be DD-MM-YYYY')
            }
            else if(isNaN(arr[0]) || isNaN(arr[1]) || isNaN(arr[2])){
                error.push('Invalid input date')
            }
            else if(Number(arr[1]) < 1 || Number(arr[1]) > 12){
                error.push('Input for month should be valid')
            }
            else if(Number(arr[1]) === 1 || Number(arr[1]) === 3 || Number(arr[1]) === 5 || Number(arr[1]) === 7 || Number(arr[1]) === 8 || Number(arr[1]) === 10 || Number(arr[1]) === 12){
                if(Number(arr[0]) < 1 || Number(arr[0]) > 31){
                    error.push('Input for date should be valid')
                }
            }
            else if(Number(arr[1]) === 4 || Number(arr[1]) === 6 || Number(arr[1]) === 9 || Number(arr[1]) === 11){
                if(Number(arr[0]) < 1 || Number(arr[0]) > 30){
                    error.push('Input for date should be valid')
                }
            }
            else if(Number(arr[1]) === 2){
                if(Number(arr[0]) < 1 || Number(arr[0]) > 29){
                    error.push('Input for date should be valid')
                }
            }
        }
        return error
    }
}

module.exports = StudentsController