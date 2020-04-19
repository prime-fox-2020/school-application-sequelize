const { Teacher } = require('../models');

class Controller {
    static showData(req, res) {
        Teacher.findAll()
            .then(data => {
                res.render('showTeacher', { data, title: 'Teachers', alert: req.query.message });
            })
            .catch(err => {
                res.render('error', { err });
            })
    }

    static addData(req, res) {
        const data = { first_name: '', last_name: '', email: '', gender: '' };
        res.render('inputTeacher', { alert: null, data, title: 'Add Data Teacher' });
    }

    static editData(req, res) {
        Teacher.findByPk(req.params.id)
            .then(data => {
                res.render('inputTeacher', { alert: null, data, title: 'Edit Data Teacher' });
            })
            .catch(err => {
                res.render('error', { err });
            });
    }

    static dataPost(req, res) {
        const data = req.body;
        if (data.first_name == '') res.render('inputTeacher', { alert: 'Input your first name', data, title: data.act });
        else if (data.last_name == '') res.render('inputTeacher', { alert: 'Input your last name', data, title: data.act });
        else if (data.email == '') res.render('inputTeacher', { alert: 'Input your email', data, title: data.act });
        else {
            if (data.act[0] == 'A') {
                Teacher.create({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    gender: data.gender
                })
                    .then(data => {
                        res.redirect('/teachers?message=Data Berhasil Ditambahkan');
                    })
                    .catch(err => {
                        res.render('error', { err })
                    });
            }
            else {
                Teacher.update({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    gender: data.gender
                }, {
                    where: {id: req.params.id}
                })
                .then(data => {
                    res.redirect('/teachers?message=Data Berhasil Diedit');
                })
                .catch(err => {
                    res.render('error', { err })
                });
            }
        }
    }

    static delete(req, res) {
        Teacher.destroy({
            where: {id: req.params.id}
        })
        .then(data => {
            res.redirect(`/teachers?message=Data dengan id ${req.params.id} dihapus`);
        })
        .catch(err => {
            res.render('error', { err })
        });
    }
}

module.exports = Controller;