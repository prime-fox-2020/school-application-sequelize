const Subject = require('../models').Subject;

class SubjectCont {
    static show(req, res) {
        Subject.findAll()
        .then((result) => {
            res.render('subjects', { data: result, msg: req.query.msg })
        }).catch((err) => {
            res.send(err)
        });
    }
}

module.exports = {
    SubjectCont
};
