const router = require('express').Router()
const teacherController = require('../controller/teacherController')
const homeController = require('../controller/homeController')

router.get('/', teacherController.show)
router.get('/:id', teacherController.findTeacherById)
router.get('/*', homeController.notFound)

module.exports = router