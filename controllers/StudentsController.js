const Students = require("../models").Student;

class StudentsController {
  static list(req, res) {
    Students.findAll({
      order: [["id", "asc"]],
    })
      .then((students) => {
        res.render("students", { students });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static addForm(req, res) {
    res.render("addstudents");
  }

  static add(req, res) {
    const errors = StudentsController.validate(req.body)
    if(errors.length>0){
      res.redirect(`/students/add?error=${errors.join(', ')}`)
    } else {
    Students.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
    })
      .then(() => {
        res.redirect("/students");
      })
      .catch((err) => {
        res.send(err);
      });
    }
  }

  static delete(req, res) {
    Students.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.redirect("/students");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static editForm(req, res) {
    Students.findByPk(Number(req.params.id))
      .then((students) => {
        res.render("editstudents", { students });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static edit(req, res) {
    const errors = StudentsController.validate(req.body)
    if(errors.length>0){
      res.redirect(`/students/${req.params.id}/edit?error=${errors.join(', ')}`)
    } else {
    Students.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        birth_date: req.body.birth_date,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(() => {
        res.redirect("/students");
      })
      .catch((err) => {
        res.send(err);
      });
    }
  }

  static getEmail(req, res) {
    Students.findAll({
      where: {
        email: req.params.email,
      },
    })
      .then((students) => {
        console.log(students[0].dataValues);
        res.render("searchbyemail", { students: [students[0].dataValues] });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static validate(data) {
    const error = [];
    if (!data.first_name) {
      error.push("name must be filled");
    }
    if (!data.email) {
      error.push("email must be filled");
    } else {
      if (!data.email.includes("@")) {
        error.push("format email must be correct");
      } else if (!data.email.includes("@sekolah.id")) {
        error.push("email used must be ended with @sekolah.id");
      }
    }
    if (!data.gender) {
      error.push("gender must be selected");
    }
    if (!data.birth_date) {
      error.push("birth date must be filled");
    }
    return error;
  }
}

module.exports = StudentsController;
