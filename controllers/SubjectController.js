const Subject = require('../models').Subject

class SubjectController{
    static get(req, res){
        Subject.findAll().then(data => {
            // projects will be an array of all Project instances
            res.render('subject', {object : data})
          })
    }
}

module.exports = SubjectController