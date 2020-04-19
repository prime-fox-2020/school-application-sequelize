const router = require('express').Router()
const subjectController = require('../controllers/subjects')

router.get('/', subjectController.show)
router.get('/:id', subjectController.getId)

module.exports = router