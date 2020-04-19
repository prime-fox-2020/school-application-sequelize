const { Teacher } = require('../models');

class TeacherController{
    static get(req, res) {
        Teacher.findAll()
        .then(data => {
            return res.render('teacher', { object: data });
        })
        .catch(err => {
            throw err
        })
        // Teacher.get((err, data) => {
        //     if (err) {
        //         res.render('error', { err });
        //     } else {
        //         res.render('teacher', { object: data });
        //     }
        // })
    }

    static getById(req, res) {
        Teacher.findAll({
            where: { id:Number(req.params.id) }
        })
        .then(data => {
            return res.render('teacher', { object: data });
        })
        .catch(err => {
            throw err
        })
        // Teacher.getById(Number(req.params.id))
        // .then(data => {
        //     return res.render('teacher', { object: data });
        // })
        // .catch(err => {
        //     throw err
        // })
    }
}

module.exports = TeacherController;