const Subject = require('../models').Subject;

class SubjectsController {
  static getData(req, res) {
    Subject.findAll()
    .then(data => {
      res.render('subjects', {data});
    })
    .catch(err => {
      res.send(err);
    })
  }
}

module.exports = SubjectsController;