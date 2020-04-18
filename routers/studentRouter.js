const router = require('express').Router()

const StudentController = require('../controllers/studentController')

router.get('/', StudentController.showStudent)
router.get('/add', StudentController.addForm)
router.post('/add', StudentController.addPost)
router.get('/delete/:id', StudentController.delete)
router.get('/edit/:id', StudentController.editGet)
router.post('/edit/:id', StudentController.editPost)
router.get('/:email', StudentController.findEmail)
//router.get('/:id', StudentController.findId)

module.exports = router