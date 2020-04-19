const express = require('express')
const router = express.Router()

const StudentsController = require('../controllers/StudentsController')

router.get('/', StudentsController.show)
router.get('/add', StudentsController.showAdd)
router.post('/add', StudentsController.add)
router.get('/delete/:id', StudentsController.delete)
router.get('/edit/:id', StudentsController.showEdit)
router.post('/edit/:id', StudentsController.edit)

module.exports = router