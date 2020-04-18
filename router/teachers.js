const router = require('express').Router();
const Teacher = require('../controller/teachersController');

router.get('/', Teacher.getData);

module.exports = router;