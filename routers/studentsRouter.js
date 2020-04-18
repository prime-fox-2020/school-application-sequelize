const express = require('express')
const router = express.Router()

const StudentsController = require('../controllers/StudentsController')

router.get('/', StudentsController.list)
router.get('/add', StudentsController.addForm)
router.post('/add', StudentsController.add)
router.get('/:id/edit', StudentsController.editForm)
router.post('/:id/edit', StudentsController.edit)
router.get('/:id/delete', StudentsController.delete)
router.get('/:email', StudentsController.getEmail)

module.exports = router