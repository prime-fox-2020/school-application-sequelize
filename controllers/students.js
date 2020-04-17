const { Student } = require('../models');

class StudentControllers {
    static show(req, res){
        Student.findAll({
            orders: [
                ['id', 'asc']
            ]
        })
        .then(data => {
            res.render('students', {students: data})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = StudentControllers