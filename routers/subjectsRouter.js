const router = require('express').Router()
const SubjectsController = require('../controllers/SubjectsController')

router.route('/')
  .get(SubjectsController.getHome)

module.exports = router