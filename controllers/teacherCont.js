const Teacher = require('../models').Teacher;

class TeacherCont {
    static show (req, res) {
        Teacher.findAll()
        .then((data) => {
            res.render('teachers', {data, msg: req.query.msg})
        }).catch((err) => {
            res.send(err)
        });
    }
}

module.exports = {
    TeacherCont
};
