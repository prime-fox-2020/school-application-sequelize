const { Subject } = require('../models')

class SubjectsController {
    static getAll(req, res) {
        Subject.findAll({
            orders: [
                ['id', 'asc']
            ]
        })
        .then(data => {
            res.render('subjects', { subjects: data })
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }

    static getByID(req, res) {
        Subject.findAll({where: {id: req.params.id}})
        .then(data => {
            res.render('subjects', { subjects : data })
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }
}

module.exports = SubjectsController