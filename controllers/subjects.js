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
}

module.exports = SubjectControllers