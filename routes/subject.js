const router = require('express').Router();
const subjectController = require('../controllers/subjectController');

router.get('/', subjectController.show);
router.get('/:id', subjectController.getById);

module.exports = router;
