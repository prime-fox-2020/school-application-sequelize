const router = require('express').Router()
const PagesController = require('../controllers/PagesController')

router.route('/')
  .get(PagesController.getHome)

module.exports = router