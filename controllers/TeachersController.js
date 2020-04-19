const Teacher = require('../models/').Teacher;

class TeachersController {
    static showList(req, res) {
        const msg = req.query.msg;
        Teacher.findAll()
        .then(list => res.render('teachers', {list, msg}))
        .catch(err => res.render('error', {msg: err}));
    }

    static showListByID(req, res) {
        const msg = req.query.msg;
        Teacher.findAll({where:{id:req.params.id}})
        .then(list => {
            if (list.length > 0) res.render('teachers', {list, msg});
            else res.render('teachers', {list, msg: `Teacher with id: ${req.params.id} not found!`});
        })
        .catch(err => res.render('error', {msg:err}));
    }
}

module.exports = TeachersController;