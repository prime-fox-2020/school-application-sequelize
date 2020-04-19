const { Student } = require('../models');

class Controller {
    static showData(req, res) {
        Student.findAll()
            .then(data => {
                res.render('showStudent', { data, title: 'Students', alert: req.query.message });
            })
            .catch(err => {
                res.render('error', { err });
            })
    }

    static addData(req, res) {
        const data = { first_name: '', last_name: '', email: '', gender: '', birth_date: '' };
        res.render('inputStudent', { alert: null, data, title: 'Add Data Student' });
    }

    static editData(req, res) {
        Student.findByPk(req.params.id)
            .then(data => {
                res.render('inputStudent', { alert: null, data, title: 'Edit Data Student' });
            })
            .catch(err => {
                res.render('error', { err });
            });
    }

    static dataPost(req, res) {
        const data = req.body;
        if (data.first_name == '') res.render('inputStudent', { alert: 'Input your first name', data, title: data.act });
        else if (data.last_name == '') res.render('inputStudent', { alert: 'Input your last name', data, title: data.act });
        else if (data.email == '') res.render('inputStudent', { alert: 'Input your email', data, title: data.act });
        else if (data.birth_date == '') res.render('inputStudent', { alert: 'Input your birth_date', data, title: data.act });
        else {
            const check = data.birth_date.split('-');
            let cond = 0;
            if (check.length > 1) {
                if (check[0].length === 4 && !isNaN(+check[0]) && +check[0] < 2016) cond++;
                if (check[1].length === 2 && !isNaN(+check[1]) && +check[1] < 13) cond++;
                if (check[2].length === 2 && !isNaN(+check[2]) && +check[2] < 32) cond++;
            }
            const birth_date = new Date(data.birth_date)
            if (cond !== 3 || birth_date == 'Invalid Date') res.render('inputStudent', { alert: 'Wrong date format. Must (yyyy-mm-dd)', data, title: data.act });
            else {
                if (data.act[0] == 'A') {
                    Student.create({
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        gender: data.gender,
                        birth_date
                    })
                        .then(data => {
                            res.redirect('/students?message=Data Berhasil Ditambahkan');
                        })
                        .catch(err => {
                            res.render('error', { err })
                        });
                }
                else {
                    Student.update({
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        gender: data.gender,
                        birth_date
                    }, {
                        where: { id: req.params.id }
                    })
                        .then(data => {
                            res.redirect('/students?message=Data Berhasil Diedit');
                        })
                        .catch(err => {
                            res.render('error', { err })
                        });
                }
            }
        }
    }

    static delete(req, res) {
        Student.destroy({
            where: { id: req.params.id }
        })
            .then(data => {
                res.redirect(`/students?message=Data dengan id ${req.params.id} dihapus`);
            })
            .catch(err => {
                res.render('error', { err })
            });
    }
}

module.exports = Controller;