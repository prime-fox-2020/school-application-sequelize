const {Subject} = require('../models')

class SubjectsController {

  static findAll(req, res) {
    Subject.findAll({})
      .then(subjects => { res.render('subject', {subjects}) })
      .catch(err => { res.send(err) })
  }
}

module.exports = SubjectsController