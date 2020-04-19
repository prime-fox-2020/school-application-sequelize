const Student = require('../models').Student

class StudentsController{
    static getPage(req, res){
        let alert = req.query
        Student.findAll()
        .then( data => {
            res.render('students', {data, alert})
        })
        .catch( err => {
            res.render('error')
        })
    }

    static valid(data){
        const error = [] //
        if(!data.first_name || !data.gender){
            error.push('please do not leave an empty data or unselected options')
        }
        if(!data.email || !data.email.includes('@')){
            error.push('please input email with the correct address')
        }
        if(!data.birth_date){
            error.push('please do not leave an empty data of birth date' )
        }
        else{
            const num = data.birth_date.split('-')
            if(num.length !== 3 || !data.birth_date.includes('-')){
                error.push('please use date format of MM-DD-YYYY')
            }
            else if(!(0 < Number(num[1]) && Number(num[1]) <= 31) ){
                error.push('please input the correct number of date')
            }
            else if(!(Number(num[0]) > 0 && Number(num[0]) <= 12) ){
                error.push('please input the correct number of month')
            }
            else if(Number(num[2]) < 1945 ){
                error.push('we do not think our school is appropriate for elders')
            }
        }
        return error
    }

    static addPage(req, res){
        let alert = req.query
        res.render('add-student', {alert})
    }

    static postAddPage(req, res){
        const invalid = StudentsController.valid(req.body)
        if(invalid.length > 0){
            res.redirect(`/students/add?message=${invalid.join(', ')}`)
        } else {
            Student.create({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender : req.body.gender,
                birth_date : req.body.birth_date
            })
            .then( () => {
                const msg = `Succesfully added new student`
                res.redirect(`/students?message=${msg}`)
            })
            .catch( err => {
                res.render('error')
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
            res.redirect(`/students?message=${msg}`)
        })
        .catch( err => {
            res.render('error')
        })
    }

    static editPage(req, res){
        let alert = req.query
        Student.findByPk(Number(req.params.id))
        .then( data => {
            res.render('edit-student', {data, alert})
        })
        .catch( err => {
            res.render('error')
        })
    }

    static postEditPage(req, res){
        const invalid = StudentsController.valid(req.body)
        if(invalid.length > 0){
            res.redirect(`/students/edit/${req.params.id}?message=${invalid.join(',')}`)
        } else {
            Student.update({
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender : req.body.gender,
                birth_date : req.body.birth_date
            }, { where: {
                    id : Number(req.params.id)
                }}
            )
            .then( () => {
                const msg = `Successfully edit student data with id ${req.params.id}`
                res.redirect(`/students?message=${msg}`)
            })
            .catch( err => {
                res.render('error')
            })
        }
    }

    static pageWithEmail(req, res){
        let alert = req.query
        Student.findAll({
            where: {
                email: req.params.email
            }
        })
        .then((students) => {
            console.log(students[0].dataValues);
            res.render('students', { data: [ students[0].dataValues ], alert });
        })
        .catch( err => {
            res.render('error')
        })
    }
    
}

module.exports = StudentsController