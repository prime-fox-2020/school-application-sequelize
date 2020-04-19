const router = require('express').Router()
const HomeControllers = require('../controllers/home-controllers.js')
const studentsRouter = require('./students-router')
const teachersRouter = require('./teachers-router')
const subjectsRouter = require('./subjects-router')


router.get('/', HomeControllers.home)
router.use('/students', studentsRouter)
router.use('/teachers', teachersRouter)
router.use('/subjects', subjectsRouter)


module.exports = router