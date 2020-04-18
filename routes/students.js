const express = require('express')
const router = express.Router()
const StudentsController = require('../controllers/StudentsController')


router.get('/', StudentsController.getPage)
router.get('/add', StudentsController.add)
router.post('/add', StudentsController.addPost)
router.get('/delete/:id', StudentsController.delete)
router.get('/edit/:id', StudentsController.edit)
router.post('/edit/:id', StudentsController.editPost)
router.get('/:email', StudentsController.getPageWithEmail)


module.exports = router