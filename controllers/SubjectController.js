const { Subject } = require('../models')

class SubjectController{
    static get(req, res) {
        Subject.findAll()
        .then(data => {
            return res.render('subject', { object: data });
        })
        .catch(err => {
            throw err
        })
        // Subject.get((err, data) => {
        //     if (err) {
        //         res.render('error', { error: err });
        //     } else {
        //         res.render('subject', { object: data });
        //     }
        // })
    }

}

module.exports = SubjectController;