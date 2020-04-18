const express = require('express')
const router = express.Router()

const TeachersController = require('../controllers/TeachersController')

router.get('/', TeachersController.list)
router.get('/:id', TeachersController.getId)

module.exports = router