const express = require('express')
const router = express.Router()
const studentsRouter = require('./studentsRouter')
const DefaultController = require('../controllers/DefaultController')


router.get('/', DefaultController.home)
router.use('/students', studentsRouter)

module.exports = router