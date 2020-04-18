const router = require('express').Router();
const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.show);
router.get('/:id', teacherController.getById);

module.exports = router;
