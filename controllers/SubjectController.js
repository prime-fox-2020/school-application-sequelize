let Model = require('../modelis/subjectsModel')
const Subject = require('../models').Subject

class SubjectController {
    static getSubject(req,res){
        Subject.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        .then(data=>{
            console.log(data)
            res.render('../views/subjects.ejs', {data: data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static getSubjectId(req,res){
        Subject.findByPk(Number(req.params.id))
        .then(data=>{
            res.render('../views/subjects.ejs', {data: [data.dataValues]})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = SubjectController