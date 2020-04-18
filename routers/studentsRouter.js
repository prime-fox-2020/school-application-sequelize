const router = require('express').Router()
const StudentsController = require('../controllers/StudentsController')

router.route('/')
  .get(StudentsController.findAll)

router.route('/add')
  .get(StudentsController.addForm)
  .post(StudentsController.add)

  router.route('/delete/:id')
  .get(StudentsController.delete)

router.route('/edit/:id')
  .get(StudentsController.editForm)
  .post(StudentsController.edit)

router.route('/*')
  .get((req, res) => res.render('404'))

module.exports = router