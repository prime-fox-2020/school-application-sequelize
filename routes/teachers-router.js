const router = require('express').Router()
const TeachersController = require('../controllers/teachers-controller')

router.get('/', TeachersController.showTeachers)
router.get('/add', TeachersController.getAddForm)
router.post('/add', TeachersController.postAdd)
router.get('/edit/:id', TeachersController.getEditForm)
router.post('/edit/:id', TeachersController.postEdit)
router.get('/delete/:id', TeachersController.delete)
router.post('/:email', TeachersController.searchTeacherByEmail)

module.exports = router