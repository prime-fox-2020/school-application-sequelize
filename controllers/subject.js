const { Subject } = require('../models');

class Controller {
    static showData(req, res) {
        Subject.findAll()
            .then(data => {
                res.render('showSubject', { data, title: 'Subjects', alert: req.query.message });
            })
            .catch(err => {
                res.render('error', { err });
            })
    }

    static addData(req, res) {
        const data = { subject_name: ''};
        res.render('inputSubject', { alert: null, data, title: 'Add Data Subject' });
    }

    static editData(req, res) {
        Subject.findByPk(req.params.id)
            .then(data => {
                res.render('inputSubject', { alert: null, data, title: 'Edit Data Subject' });
            })
            .catch(err => {
                res.render('error', { err });
            });
    }

    static dataPost(req, res) {
        const data = req.body;
        if (data.subject_name == '') res.render('inputSubject', { alert: 'Input subject name', data, title: data.act });
        else {
            if (data.act[0] == 'A') {
                Subject.create({
                    subject_name: data.subject_name
                })
                    .then(data => {
                        res.redirect('/subjects?message=Data Berhasil Ditambahkan');
                    })
                    .catch(err => {
                        res.render('error', { err })
                    });
            }
            else {
                Subject.update({
                    subject_name: data.subject_name
                }, {
                    where: {id: req.params.id}
                })
                .then(data => {
                    res.redirect('/subjects?message=Data Berhasil Diedit');
                })
                .catch(err => {
                    res.render('error', { err })
                });
            }
        }
    }

    static delete(req, res) {
        Subject.destroy({
            where: {id: req.params.id}
        })
        .then(data => {
            res.redirect(`/subjects?message=Data dengan id ${req.params.id} dihapus`);
        })
        .catch(err => {
            res.render('error', { err })
        });
    }
}

module.exports = Controller;