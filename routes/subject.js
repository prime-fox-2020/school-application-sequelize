const router = require('express').Router();
const Controller = require('../controllers/subject');

router.get('/', Controller.showData);
router.get('/add', Controller.addData);
router.post('/add', Controller.dataPost);
router.get('/edit/:id', Controller.editData);
router.post('/edit/:id', Controller.dataPost);
router.get('/delete/:id', Controller.delete);

module.exports = router;