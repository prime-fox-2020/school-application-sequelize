const express = require('express')
const DefaultController = require('../controllers/DefaultController')
const teachersRouter = require('./teachers')
const subjectsRouter = require('./subjects')
const studentsRouter = require('./students')
const router = express.Router()


router.get('/', DefaultController.getHome)
router.use('/teachers', teachersRouter)
router.use('/subjects', subjectsRouter)
router.use('/students', studentsRouter)
router.get('/*', DefaultController.notFound)


module.exports = router