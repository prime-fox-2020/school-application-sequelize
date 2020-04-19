const Student = require('../models').Student;

class StudentsController {
  static getData(req, res) {
    Student.findAll({order: [['id', 'ASC']]})
    .then(data => {
      res.render('students', {data});
    })
    .catch(err => {
      res.send(err);
    })
  }

  static addData(req, res) {
    res.render('students_form', {data: null, title: 'Add', error: null});
  }

  static add(req, res) {
    const date = req.body.birth_date.split('/').reverse().join('-');
    const value = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: new Date(date)
    }
    
    const validate = StudentsController.validation(req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.birth_date);

    if (validate.length) {
      value.birth_date = req.body.birth_date;
      res.render('students_form', {data: value, title: 'Add', error: validate.join(', ')});
    } else {
      Student.create(value)
      .then(data => {
        res.redirect('/students');
      })
      .catch(err => {
        res.send(err);
      })
    }
  }

  static editData(req, res) {
    Student.findAll()
    .then(data => {
      data.forEach(el => {
        if (el.id == req.params.id) {
          res.render('students_form', {data: el, title: 'Edit', error: null});
        }
      })
    })
  }

  static edit(req, res) {
    const date = req.body.birth_date.split('/').reverse().join('-');
    const value = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: new Date(date)
    }

    const validation = StudentsController.validation(req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.birth_date);

    if (!validation.length) {
      Student.update(value, {where: {id: req.params.id}})
      .then(data => {
        res.redirect('/students');
      })
      .catch(err => {
        res.send(err);
      })
    } else {
      value.birth_date = req.body.birth_date;
      res.render('students_form', {data: value, title: 'Edit', error: validation.join(', ')});
    }
  }

  static delete(req, res) {
    Student.destroy({where: {id: req.params.id}})
    .then(() => res.redirect('/students'))
    .catch(err => res.send(err))
  }

  static searchEmail(req, res) {
    Student.findAll()
    .then(data => {
      res.render('students', {data: data.filter(el => el.email == req.params.email)})
    })
    .catch(err => res.send(err))
  }

  static searchData(req, res) {
    res.redirect(`/students/${req.body.email}`);
  }

  static validation(first_name, last_name, email, gender, birth_date) {
    let error = [];

    if (!first_name) {
      error.push('First Name tidak boleh kosong');
    }
    if (!last_name) {
      error.push('Last Name tidak boleh kosong');
    }
    if (!email) {
      error.push('Email tidak boleh kosong');
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      error.push('Email Salah');
    }
    if (!gender) {
      error.push('Gender tidak boleh kosong');
    }
    if (!birth_date) {
      error.push('Birth Date tidak boleh kosong');
    } else if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(birth_date)) {
      error.push('Birth Date salah');
    }

    console.log(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(birth_date));

    return error;
  }
}

module.exports = StudentsController;