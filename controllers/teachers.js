const { Teacher } = require('../models')

class TeacherControllers {
    static show(req, res){
        Teacher.findAll({
            orders: [
                ['id', 'asc']
            ]
        })
        .then(data => {
            res.render('teachers', {teachers: data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getId(req, res) {
        Teacher.findAll({where: {id: req.params.id}})
            .then(data => {
                res.render('teachers', {teachers: data});
            })
            .catch(err => {
                res.render('error', {error: err})
            })
    }
}

module.exports = TeacherControllers