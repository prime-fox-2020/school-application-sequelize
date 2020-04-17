const { Student } = require('../models');
const ChangeMonth = require('../helpers/date');

class StudentController {
    static read(req, res) {
        Student.findAll({order: [['id', 'ASC']]})
            .then(data => {
                console.log(data)
                res.render('student', { data, message: req.query.message });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static add_get(req, res) {
        res.render('student_add', { error: req.query.error });
    }

    static add_post(req, res) {
        let errorMsg = [];
        let date = req.body.birth_date.split('-');

        if (req.body.first_name === '') {
            errorMsg.push('First Name is Empty!');
        }
        if (req.body.last_name === '') {
            errorMsg.push('Last Name is Empty!');
        }
        if (req.body.email === '') {
            errorMsg.push('Email is Empty!');
        }
        if (req.body.gender === undefined) {
            errorMsg.push('Gender is Empty!');
        }
        if (req.body.birth_date === '') {
            errorMsg.push('Birth Date is Empty!');
        } else {
            if (date[2] > 31) {
                errorMsg.push("DD isn't more than 31");
            }
            if (date[1] > 12) {
                errorMsg.push("Are u Have month more than 12?");
            } else {
                date[1] = ChangeMonth.changeToWord(date[1]);
            }
            if (date[0] > 2020 || date[0] < 1900) {
                errorMsg.push("You can type this if u live in this century!")
            }
        }

        let birth_date = date.reverse().join(' ');

        if(errorMsg.length > 1){
            res.redirect(`/students/add?error=${errorMsg.join(' ')}`);
        } else {
            Student.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                birth_date,
                createdAt: new Date(),
                updatedAt: new Date()
            })
                .then(data => {
                    res.redirect(`/students?message=Success Add Student "${data.first_name} ${data.last_name}"`);
                })
                .catch(err => {
                    res.send(err);
                })
        }
    }

    static getEmail(req, res) {
        Student.findAll({where: {email: req.params.email}})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            })
    }

    static edit_get(req, res) {
        Student.findByPk(req.params.id, {})
            .then(data => {
                let date = data.dataValues.birth_date.split(' ');
                date[1] = ChangeMonth.changeToNumber(date[1]);

                if(date[0] < 10){
                    date[0] = `0${date[0]}`;
                }

                data.dataValues.birth_date = date.reverse().join('-');
                res.render('student_edit', {data, error: req.query.error});
            })
    }

    static edit_post(req, res) {
        let errorMsg = [];
        let date = req.body.birth_date.split('-');

        if (req.body.first_name === '') {
            errorMsg.push('First Name is Empty!');
        }
        if (req.body.last_name === '') {
            errorMsg.push('Last Name is Empty!');
        }
        if (req.body.email === '') {
            errorMsg.push('Email is Empty!');
        }
        if (req.body.gender === undefined) {
            errorMsg.push('Gender is Empty!');
        }
        if (req.body.birth_date === '') {
            errorMsg.push('Birth Date is Empty!');
        } else {
            if (date[2] > 31) {
                errorMsg.push("DD isn't more than 31");
            }
            if (date[1] > 12) {
                errorMsg.push("Are u Have month more than 12?");
            } else {
                date[1] = ChangeMonth.changeToWord(date[1]);
            }
            if (date[0] > 2020 || date[0] < 1900) {
                errorMsg.push("You can type this if u live in this century!")
            }
        }

        let birth_date = date.reverse().join(' ');

        if(errorMsg.length > 1){
            res.redirect(`/students/${req.params.id}/edit?error=${errorMsg.join(' ')}`);
        } else {
            Student.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                birth_date,
                updatedAt: new Date()
            }, {where: {id: req.params.id}})
                .then(data => {
                    res.redirect(`/students?message=Success Edit Student "${req.body.first_name} ${req.body.last_name}"`);
                })
                .catch(err => {
                    res.send(err);
                })
        }
    }

    static delete(req, res) {
        Student.destroy({ where: { id: req.params.id }})
            .then(() => {
                res.redirect(`/students?message=Success Delete Student With Id ${req.params.id}`);
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = StudentController;