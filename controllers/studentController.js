const { Student } = require('../models');
const ChangeMonth = require('../helpers/date');
const Validators = require('../helpers/validators');

class StudentController {
    static read(req, res) {
        Student.findAll({order: [['id', 'ASC']]})
            .then(data => {
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
        const { errorMsg, birth_date } = Validators.validating(req.body);

        if(errorMsg.length >= 1){
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
        const { errorMsg, birth_date } = Validators.validating(req.body);

        if(errorMsg.length >= 1){
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