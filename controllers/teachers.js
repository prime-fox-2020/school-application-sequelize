const { Teacher } = require('../models')

class TeachersController {
    static getAll(req, res) {
        Teacher.findAll({
            orders: [
                ['id', 'asc']
            ]
        })
        .then(data => {
            res.render('teachers', { teachers: data })
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }

    static getByID(req, res) {
        Teacher.findAll({where: {id: req.params.id}})
        .then(data => {
            res.render('teachers', { teachers : data })
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }
}

module.exports = TeachersController