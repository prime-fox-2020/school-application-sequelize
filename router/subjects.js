const router = require('express').Router();
const Subject = require('../controller/subjectsController');

router.get('/', Subject.getData);

module.exports = router;