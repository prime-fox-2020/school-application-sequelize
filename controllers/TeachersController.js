const {Teacher} = require('../models')
class TeachersController {

  static findAll(req, res) {
    Teacher.findAll({})
      .then(teachers => { res.render('teacher', {teachers}) })
      .catch(err => { res.send(err) })
  }
}

module.exports = TeachersController