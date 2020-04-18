const Teacher = require('../models').Teacher;

class TeachersController {
  static getData(req, res) {
    Teacher.findAll()
    .then(data => {
      res.render('teachers', {data});
    })
    .catch(err => {
      res.send(err);
    })
  }

  static searchId(req, res) {
    Teacher.findAll()
    .then(data => {
      res.render('teachers', {data: data.filter(el => el.id == req.params.id)})
    })
    .catch(err => res.send(err))
  }
}

module.exports = TeachersController;