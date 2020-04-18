const teachersModel = require('../models').Teacher

class TeachersController {
    static getTeacherList (req, res) {
        teachersModel.findAll()
        .then(data=>{
            console.log(data)
            res.render('teachers.ejs', { data })

        })
        .catch(err => {
            res.send(err, 'Data not found')
        })
    }

    static getTeachersId (req, res) {
        teachersModel.findByPk(Number(req.params.id))
        .then(data => {
            console.log(data.dataValues)
            res.render('teachers.ejs', { data : [data.dataValues] })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = TeachersController;