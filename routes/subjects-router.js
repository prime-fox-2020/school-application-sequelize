const router = require('express').Router()
const SubjectsController = require('../controllers/subjects-controller')

router.get('/', SubjectsController.showSubjects)
router.get('/add', SubjectsController.getAddForm)
router.post('/add', SubjectsController.postAdd)
router.get('/edit/:id', SubjectsController.getEditForm)
router.post('/edit/:id', SubjectsController.postEdit)
router.get('/delete/:id', SubjectsController.delete)
router.post('/:subject_name', SubjectsController.searchSubjectByName)

module.exports = router
