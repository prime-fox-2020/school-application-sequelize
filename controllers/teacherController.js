const { Teacher } = require('../models');

class TeacherController{
    static read(req, res){
        Teacher.findAll({})
            .then(data => {
                res.render('teacher', {data});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getId(req, res){
        Teacher.findByPk(req.params.id, {})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = TeacherController;