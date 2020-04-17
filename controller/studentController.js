const Student = require('../models').Student

class studentController {
    static show(req, res) {
        // console.log(Student)
        Student.findAll()
            .then(student => {
                res.render('student', { student })
            })
            .catch(err => {
                res.redirect('/*')
            })
    }

    static addGet(req, res) {
        const error = req.query.error;
        res.render('addForm', { error })
    }

    static addPost(req, res) {
        // console.log(req.body.birth_date)
        const error = studentController.validation(req.body)
        if (error.length > 0) {
            res.redirect(`/student/add?error=${error.join(', ')}`)
        } else {
            Student.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                birth_date: req.body.birth_date
            })
                .then(data => {
                    res.redirect('/student')
                })
                .catch(err => {
                    res.redirect('/*')
                })
        }

    }

    static studentEmail(req, res) {
        Student.findOne({ where: { email: req.params.email } })
            .then(data => {
                let student = []
                student.push(data.dataValues)
                res.render('student', { student })
            })
            .catch(err => {
                res.redirect('/*')
            });
    }


    static editGet(req, res) {
        const error = req.query.error;
        Student.findByPk(Number(req.params.id))
            .then(student => {
                // console.log(student.birth_date)
                res.render('editForm', { student , error })
            })
            .catch(err => {
                res.redirect('/*')
            })



        
    }

    static editPost(req, res) {
        // console.log(Number(req.params.id))
        const error = studentController.validation(req.body)
        if (error.length > 0) {
            res.redirect(`/student/${req.params.id}/edit?error=${error.join(', ')}`)
        } else {
            Student.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                birth_date: req.body.birth_date
            }, {
                where: { id: req.params.id }
            })
                .then(data => {
                    res.redirect('/student')
                })
                .catch(err => {
                    res.redirect('/*')
                })
        }
    }

    static deleteStudent(req, res) {
        // console.log(req.params.id)
        Student.destroy(
            { where: { id: req.params.id } }
        )
            .then(data => {
                res.redirect('/student')
            })
            .catch(err => {
                res.redirect('/*')
            })
    }

    static validation(req) {
        const error = []
        const birth = req.birth_date
        if (!req.first_name) {
            error.push('First name is required')
        }
        if (!req.last_name) {
            error.push('Last name is required')
        }
        if (!req.email) {
            error.push('Email is required')
        }
        if (!birth) {
            error.push('Date of birth is required')
        }
        //  else if (birth[4] != "-" || birth[7] != "-" ||
        //     Number(birth[0] + birth[1] + birth[2] + birth[3]) < 1 ||
        //     Number(birth[5] + birth[6]) > 12 || Number(birth[5] + birth[6]) < 1 ||
        //     Number(birth[8] + birth[9]) > 31 || Number(birth[8] + birth[9]) < 1 ||
        //     birth.length != 10 || isNaN(`${birth[0]}${birth[1]}${birth[2]}${birth[3]}`) ||
        //     isNaN(`${birth[5]}${birth[6]}`) || isNaN(`${birth[8]}${birth[9]}`)) {
        //     error.push("Wrong Date format")
        // 
        return error
    }
}

module.exports = studentController