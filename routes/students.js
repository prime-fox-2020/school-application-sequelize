const router = require('express').Router()
const studentsControllers = require('../controllers/students')

router.get('/', studentsControllers.show)

module.exports = router