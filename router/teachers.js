const router = require('express').Router();
const Teacher = require('../controller/teachersController');

router.get('/', Teacher.getData);
router.get('/:id', Teacher.searchId);

module.exports = router;