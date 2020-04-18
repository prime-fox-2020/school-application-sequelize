const express = require('express')
const router = express.Router()

const DefaultController = require('../controllers/DefaultController')
const studentsRouter = require('./studentsRouter')
const teachersRouter = require('./teachersRouter')
const subjectsRouter = require('./subjectsRouter')


router.get('/', DefaultController.home);
router.use('/students', studentsRouter)
router.use('/teachers', teachersRouter)
router.use('/subjects', subjectsRouter)


module.exports = router