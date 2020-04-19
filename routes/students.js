const router = require('express').Router()
const studentsControllers = require('../controllers/students')

router.get('/', studentsControllers.show)
router.get('/add', studentsControllers.getAdd)
router.post('/add', studentsControllers.add)
router.get('/:id/delete', studentsControllers.delete)
router.get('/:email', studentsControllers.getEmail)
router.get('/:id/edit', studentsControllers.getEdit)
router.post('/:id/edit', studentsControllers.update)

module.exports = router