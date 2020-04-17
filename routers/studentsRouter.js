const router = require('express').Router()
const StudentsController = require('../controllers/StudentsController')

router.route('/')
  .get(StudentsController.getHome)

module.exports = router