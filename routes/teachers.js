const router = require('express').Router()
const teacherController = require('../controllers/teachers')

router.get('/', teacherController.show)

module.exports = router