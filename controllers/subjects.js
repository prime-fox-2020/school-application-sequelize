const { Subject } = require('../models')

class SubjectControllers {
    static show(req, res){
        Subject.findAll({
            orders: [
                ['id', 'asc']
            ]
        })
        .then(data => {
            res.render('subjects', {subjects: data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getId(req, res) {
        Subject.findAll({where: {id: req.params.id}})
            .then(data => {
                res.render('subjects', {subjects: data});
            })
            .catch(err => {
                res.render('error', {error: err})
            })
    }
}

module.exports = SubjectControllers