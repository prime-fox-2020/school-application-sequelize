const router = require('express').Router()
const studentController = require('../controller/studentController')

router.get('/', studentController.show)
router.get('/add', studentController.addGet)
router.post('/add', studentController.addPost)
router.get('/:email', studentController.studentEmail)
router.get('/:id/edit', studentController.editGet)
router.post('/:id/edit', studentController.editPost)
router.get('/:id/delete', studentController.deleteStudent)

module.exports = router