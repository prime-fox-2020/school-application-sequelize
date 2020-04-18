const express = require('express')
const router = express.Router()
const TeachersController = require('../controllers/TeachersController')


router.get('/', TeachersController.getPage)
router.get('/:id', TeachersController.getPageWithId)


module.exports = router