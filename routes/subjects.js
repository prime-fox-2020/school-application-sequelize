const router = require('express').Router()
const subjectController = require('../controllers/subjects')

router.get('/', subjectController.show)

module.exports = router