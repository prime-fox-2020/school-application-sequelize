const router = require('express').Router()
const TeachersController = require('../controllers/TeachersController')

router.route('/')
  .get(TeachersController.findAll)

router.route('/add')
  .get(TeachersController.addForm)
  .post(TeachersController.add)

router.route('/delete/:id')
  .get(TeachersController.delete)

router.route('/edit/:id')
  .get(TeachersController.editForm)
  .post(TeachersController.edit)

router.route('/search')
  .post(TeachersController.search)

router.route('/*')
  .get((req, res) => res.render('404'))

module.exports = router