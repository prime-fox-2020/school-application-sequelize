const router = require('express').Router();
const Students = require('../controller/studentsController');

router.get('/', Students.getData);
router.get('/add', Students.addData);
router.post('/add', Students.add);
router.get('/:id/edit', Students.editData);
router.post('/:id/edit', Students.edit);
router.get('/:id/delete', Students.delete);

module.exports = router;