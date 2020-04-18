const router = require('express').Router()

const TeacherController = require('../controllers/teacherController')

router.get('/', TeacherController.showTeacher)
router.get('/add', TeacherController.addForm)
router.post('/add', TeacherController.addPost)
router.get('/delete/:id', TeacherController.delete)
router.get('/edit/:id', TeacherController.editGet)
router.post('/edit/:id', TeacherController.editPost)
router.get('/:id', TeacherController.findId)

module.exports = router