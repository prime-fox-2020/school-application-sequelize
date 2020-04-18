const { Student } = require('../models')

class StudentController {
    static showStudent(req, res) {
        Student.findAll()
        .then(data => {
            res.render('student.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static validasi(data) {
        let error = []

        if(!data.first_name) {
            error.push('first name is required')
        }

        if(!data.last_name) {
            error.push('last name is required')
        }

        if(!data.email) {
            error.push('email is required')
        } else if(!data.email.includes('@') || !data.email.includes('.')){
            error.push('wrong format')
        }

        if(!data.gender) {
            error.push('gender is required')
        }

        if(!data.birthdate) {
            error.push('birth date is required')
        } else {
            let splitDate = data.birthdate.split('-')

            for(let i=0; i<splitDate.length; i++){

                let yy = Number(splitDate[0])
                let mm = Number(splitDate[1])
                let dd = Number(splitDate[2])

                if(mm < 1 || mm > 12) {
                    error.push('MM is only 1-12')
                }

                if(dd <1 ||  dd > 32) {
                    error.push('DD is only 1-31')
                }
            }
        }

        return error
    }


    static addForm(req, res) {
        const error = req.query.error
        res.render('addStudent', {error})
    }

    static addPost(req, res) {
        const error = StudentController.validasi(req.body)

        if(error.length > 0) {
            res.redirect(`/students/add?error=${error.join(',')}`)
        } else {
            Student.create({
                first_name : req.body.first_name,
                last_name: req.body.last_name,
                email : req.body.email,
                gender : req.body.gender,
                birthdate : req.body.birthdate
                
            })
            .then(data => {
                res.redirect('/students')
            })
            .catch( err => {
                res.send(err)
            })
        }
        
    }

    static delete(req, res) {
        Student.destroy({
            where: {
                id: Number(req.params.id)
            }
        })
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editGet(req, res) {
        Student.findByPk(Number(req.params.id))
        .then(data => {
            res.render('editStudent', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editPost(req, res) {
        Student.update({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            gender : req.body.gender,
            birthdate : req.body.birthdate
        }, {
            where: {
                id : req.params.id
            }
        })
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
    }

    // static findId(req, res) {
    //     Student.findAll({
    //         where : {
    //             id : req.params.id
    //         }
    //     })
    //     .then(data => {
    //         res.send(data)
    //     })
    //     .catch(err => {
    //         res.send(err)
    //     })
    // }

    static findEmail(req, res) {
        Student.findAll({
            where: {
                email : req.params.email
            }
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = StudentController