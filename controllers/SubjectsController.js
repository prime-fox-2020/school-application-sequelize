
const Subjects = require("../models").Subject;

class SubjectsController {
  static list(req, res) {
    Subjects.findAll({
      order:[
        ['id','asc']
      ]
    })
      .then((subjects) => {
        res.render("subjects", { subjects });
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = SubjectsController;
