const router = require('express').Router()
const StudentsController = require('../controllers/students-controller')

router.get('/', StudentsController.showStudents)
router.get('/add', StudentsController.getAddForm)
// router.post('/add', StudentsController.postAdd)
router.get('/edit/:id', StudentsController.getEditForm)
// router.post('/edit/:id', StudentsController.postEdit)
// router.get('/delete/:id', StudentsController.delete)
// router.post('/:id', StudentsController.searchStudentsById)

module.exports = router