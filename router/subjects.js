const router = require('express').Router();
const Subject = require('../controller/subjectsController');

router.get('/', Subject.getData);
router.get('/:id', Subject.searchId);

module.exports = router;