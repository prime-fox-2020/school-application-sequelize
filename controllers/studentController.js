const { Student } = require('../models');
const Validators = require('../helpers/validators');

class StudentController {
    static read(req, res) {
        Student.findAll({order: [['id', 'ASC']]})
            .then(data => {
                res.render('student', { data, message: req.query.message });
            })
            .catch(err => {
                res.render('error', {err})
            })
    }

    static add_get(req, res) {
        res.render('student_add', { error: req.query.error });
    }

    static add_post(req, res) {
        const errorMsg = Validators.validating(req.body);

        if(errorMsg.length >= 1){
            res.redirect(`/students/add?error=${errorMsg.join(' ')}`);
        } else {
            Student.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                birth_date: new Date(req.body.birth_date),
                createdAt: new Date(),
                updatedAt: new Date()
            })
                .then(data => {
                    res.redirect(`/students?message=Success Add Student "${data.first_name} ${data.last_name}"`);
                })
                .catch(err => {
                    res.render('error', {err})
                })
        }
    }

    static getEmail(req, res) {
        Student.findAll({where: {email: req.params.email}})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.render('error', {err})
            })
    }

    static edit_get(req, res) {
        Student.findByPk(req.params.id, {})
            .then(data => {
                res.render('student_edit', {data, error: req.query.error});
            })
            .catch(err => {
                res.render('error', {err})
            })
    }

    static edit_post(req, res) {
        const errorMsg = Validators.validating(req.body);

        if(errorMsg.length >= 1){
            Student.findByPk(req.params.id, {})
                .then(data => {
                    res.render('student_edit', {data, error: errorMsg.join(' ')});
                })
                .catch(err => {
                    res.render('error', {err})
                })
        } else {
            Student.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                birth_date: new Date(req.body.birth_date),
                updatedAt: new Date()
            }, {where: {id: req.params.id}})
                .then(data => {
                    res.redirect(`/students?message=Success Edit Student "${req.body.first_name} ${req.body.last_name}"`);
                })
                .catch(err => {
                    res.render('error', {err})
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