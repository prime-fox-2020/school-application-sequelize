const router = require('express').Router()
const students = require('./students')
const subjects = require('./subjects')
const teachers = require('./teachers')
const homeControllers = require('../controllers/home')

router.get('/', homeControllers.home)

router.use('/students', students)
router.use('/subjects', subjects)
router.use('/teachers', teachers)

module.exports = router