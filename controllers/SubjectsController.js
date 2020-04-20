// const SubjectModel = require('../models/SubjectModel');
const Subject = require('../models').Subject;

class SubjectsController {
    static showList(req, res) {
        const msg = req.query.msg;
        Subject.findAll()
        .then(list => res.render('subjects', {list, msg}))
        .catch(err => res.render('error', {msg: err}));
    }

    static showListByID(req, res) {
        const msg = req.query.msg;
        Subject.findAll({where:{id:req.params.id}})
        .then(list => {
            if (list.length > 0) res.render('subjects', {list, msg});
            else res.render('subjects', {list, msg: `Subject with id: ${req.params.id} not found!`});
        })
        .catch(err => res.render('error', {msg:err}));
    }
}

module.exports = SubjectsController;