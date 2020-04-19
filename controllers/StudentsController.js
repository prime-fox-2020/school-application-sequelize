const {Sequelize} = require('sequelize')
const {Student} = require('../models')
const { gt, lte, ne, in: opIn, iLike, like, or } = Sequelize.Op

class StudentsController {

  static findAll(req, res) {
    Student.findAll({
      order: [['id', 'ASC']]
    })
      .then(students => {
        let locals = {
          students: students.map(el => {
            el.dataValues.birthDate = StudentsController.dbToIndonesian(el.dataValues.birthDate)
            return el
          }),
          alert: req.query
        }
        res.render('student', locals)
      })
      .catch(err => res.send(err))
  }

  static search(req, res) {
    // res.send(req.body)
    Student.findAll({
      where: {
        email: {
          [ like ]: `%${req.body.search}%`
        }
      }
    })
    .then(results => {
      let locals = { students: results }
      if (results !== null) {
        locals.alert = {
          message: `Found ${results.length} student with email like '${req.body.search}'`,
          type: 'success'
        }
        res.render('student', locals)
      } else {
        locals.alert = {
          message: `Found 0 student with email like '${req.body.search}'`,
          type: 'danger'
        }
        res.render('student', locals)
      }
    })
    .catch(err => res.send(err))
  }

  static addForm(req, res) {
    let locals = {
      data: {},
      alert: {},
      method: 'add',
      title: 'Input new student'
    }
    res.render('student/form', locals)
  }

  static add(req, res) {
    const error = StudentsController.validation(req.body)
    const message = 'New student added successfully.'
    let locals = {
      alert: { message: error, type: 'danger' }, 
      data: req.body, 
      method: 'add',
      title: 'Input new student'
    }
    if (error.length) {
      res.render('student/form', locals)
    } else {
      req.body.birthDate = StudentsController.validateBod(req.body.birthDate)
      Student.create(req.body)
        .then(result => res.redirect(`/students?message=${message}&type=success`))
        .catch(err => res.send(err))
    }
  }

  static editForm(req, res) {
    const fail = `Student with ID ${req.params.id} is not found.`
    if (isNaN(req.params.id)) {
      res.redirect(`/students?message=${fail}&type=danger`)
    } else {
      Student.findByPk(req.params.id)
      .then(results => {
        if (results !== null) {
          let locals = {
            alert: {}, 
            data: results, 
            method: 'edit',
            title: 'Edit data student'
          }
  
          results.dataValues.birthDate = StudentsController.convertBod(results.dataValues.birthDate)
          res.render('student/form', locals)
        } else {
          res.redirect(`/students?message=${fail}&type=danger`)
        }
      })
      .catch(err => res.send(err))
    }
  }

  static edit(req, res) {
    const error = StudentsController.validation(req.body)
    const message = 'Data student has been updated successfully.'
    let locals = {
      alert: { message: error, type: 'danger' },
      data: req.body,
      method: 'edit',
      title: 'Edit data student'
    }

    if (error.length) {
      req.body.id = Number(req.params.id)
      res.render('student/form', locals)
    } else {
      req.body.birthDate = StudentsController.validateBod(req.body.birthDate)
      Student.update(req.body, {where: {id: req.params.id}})
        .then(result => res.redirect(`/students?message=${message}&type=success`))
        .catch(err => res.send(err))
    }
  }

  static delete(req, res) {
    const success = `Student with ID ${req.params.id} successfully deleted.`
    const fail = `Student with ID ${req.params.id} is not found.`
    if (isNaN(req.params.id)) {
      res.redirect(`/students?message=${fail}&type=danger`)
    } else {
      Student.findByPk(req.params.id)
      .then(results => {
        if (results !== null) {
          Student.destroy({ where: { id: Number(req.params.id) } })
          .then(results => res.redirect(`/students?message=${success}&type=success`))
          .catch(err => res.send(err))
        } else {
          res.redirect(`/students?message=${fail}&type=danger`)
        }
      })
      .catch(err => res.send(err))
    }
  }

  static validation({firstName, birthDate, gender, email}) {
    const error = []
    const validBod = StudentsController.validateBod(birthDate)
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if (!firstName) error.push('Please enter first name.')
    if (!gender) error.push('Please select student\'s gender')
    if (!validBod) error.push('Birth of date is not valid date format.')
    if (!validEmail) error.push('Email is not valid email format')
    return error
  }

  static validateBod(birthDate) {
    const [ date, month, year ] = birthDate.split('-').map(el => Number(el))
    let result = ''
    if (typeof date === 'number' && typeof month === 'number' && typeof year === 'number') {
      if (date < 1 || date > 31 || month < 1 || month > 12 || year < 1900 || new Date(year, 11, 31) > Date.now()) return false
      switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          result += year
          month < 10 ? result += `-0${month}-` : result += `-${month}-`
          date < 10 ? result += `0${date}` : result += `${date}`
          return result
        case 2:
          if (year % 4 !== 0 && date > 28) return false
          if (date > 29) return false
          result += year
          month < 10 ? result += `-0${month}-` : result += `-${month}-`
          date < 10 ? result += `0${date}` : result += `${date}`
          return result
        case 4:
        case 6:
        case 9:
        case 11:
          if (date > 30) return false
          result += year
          month < 10 ? result += `-0${month}-` : result += `-${month}-`
          date < 10 ? result += `0${date}` : result += `${date}`
          return result
      }
    }
    return false
  }

  static convertBod(birthDate) {
    const [yyyy, mm, dd] = birthDate.split('-')
    return `${dd}-${mm}-${yyyy}`
  }

  static dbToIndonesian(birthDate) {
    const dictionary = [ 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'
      , 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember' ]
    const [yyyy, mm, dd] = birthDate.split('-')

    return `${Number(dd)} ${dictionary[Number(mm)]} ${yyyy}`
  }
}

module.exports = StudentsController