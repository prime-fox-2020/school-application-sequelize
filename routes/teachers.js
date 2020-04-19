const router = require('express').Router()
const teacherController = require('../controllers/teachers')

router.get('/', teacherController.show)
router.get('/:id', teacherController.getId)

module.exports = router