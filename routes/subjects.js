const express = require('express')
const router = express.Router()
const SubjectsController = require('../controllers/SubjectsController')


router.get('/', SubjectsController.getPage)
router.get('/:id', SubjectsController.getPageWithId)


module.exports = router