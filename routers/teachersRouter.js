const router = require('express').Router()
const TeachersController = require('../controllers/TeachersController')

router.route('/')
  .get(TeachersController.findAll)

module.exports = router