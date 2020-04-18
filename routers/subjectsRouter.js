const router = require('express').Router()
const SubjectsController = require('../controllers/SubjectsController')

router.route('/')
  .get(SubjectsController.findAll)

router.route('/add')
  .get(SubjectsController.addForm)
  .post(SubjectsController.add)

router.route('/delete/:id')
  .get(SubjectsController.delete)

router.route('/edit/:id')
  .get(SubjectsController.editForm)
  .post(SubjectsController.edit)

router.route('/search')
  .post(SubjectsController.search)

router.route('/*')
  .get((req, res) => res.render('404'))

module.exports = router