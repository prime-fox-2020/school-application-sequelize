const router = require('express').Router()
const TeachersController = require('../controllers/TeachersController')

router.route('/')
  .get(TeachersController.getHome)

module.exports = router