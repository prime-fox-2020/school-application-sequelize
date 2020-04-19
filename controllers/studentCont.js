const Student = require('../models').Student;

class StudentCont {
    static show(req, res) {
        Student.findAll()
            .then((result) => {
                res.render('students', { data: result, msg: req.query.msg })
            }).catch((err) => {
                res.send(err)
            });
    }

    static delete(req, res) {
        // console.log('req: ', req.params.id);
        Student.destroy({
            where: {
                id: Number(req.params.id)
            }
        })
            .then((data) => {
                res.redirect(`/students?msg=Student with id: ${req.params.id} success deleted`)
            }).catch((err) => {
                res.send(err)
            });
    }

    static editForm(req, res) {
        Student.findByPk(req.params.id)
        .then((data) => {
            res.render('editForm', {data})
        }).catch((err) => {
            res.send(err)
        });
    }

    static update(req, res) {
        Student.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.redirect(`/students?msg=Student ${data.first_name} success updated`)
        }).catch((err) => {
            res.send(err)
        });
    }

    static addForm(req, res) {
        res.render('addForm')
    }

    static add(req, res) {
        Student.create(req.body)
            .then((data) => {
                res.redirect(`/students?msg=Student ${data.first_name} success added`)
            }).catch((err) => {
                res.send(err)
            });
    }
}
module.exports = {
    StudentCont
};
