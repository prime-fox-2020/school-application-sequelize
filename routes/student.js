const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.show);

router.get('/add', studentController.addGet);

router.post('/add', studentController.addPost);

router.get('/:id/edit', studentController.editGet);

router.post('/:id/edit', studentController.editPost);

router.get('/:id/delete', studentController.delete);

router.get('/:email', studentController.getByEmail);

router.get('/:id', studentController.getById);

module.exports = router;
