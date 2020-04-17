const { Teacher } = require('../models')

class TeacherControllers {
    static show(req, res){
        Teacher.findAll({
            orders: [
                ['id', 'asc']
            ]
        })
        .then(data => {
            res.render('teachers', {teachers: data})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = TeacherControllers