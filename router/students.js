const router = require('express').Router();
const Students = require('../controller/studentsController');

router.get('/', Students.getData);
router.post('/', Students.searchData);
router.get('/add', Students.addData);
router.post('/add', Students.add);
router.get('/:id/edit', Students.editData);
router.post('/:id/edit', Students.edit);
router.get('/:id/delete', Students.delete);
router.get('/:email', Students.searchEmail);

module.exports = router;