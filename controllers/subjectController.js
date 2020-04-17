const { Subject } = require('../models');

class SubjectController {
    static read(req, res){
        Subject.findAll({})
            .then(data => {
                res.render('subject', {data});
            })
            .catch(err => {
                res.send(err);
            })
    }

    static getId(req, res){
        Subject.findByPk(req.params.id, {})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = SubjectController;