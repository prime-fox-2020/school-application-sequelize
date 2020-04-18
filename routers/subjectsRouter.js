const express = require('express')
const router = express.Router()

const SubjectsController = require('../controllers/SubjectsController')

router.get('/', SubjectsController.list)

module.exports = router