const router = require('express').Router();
const HomeController = require('../controllers/home');
const teacherRouter = require('./teacher');
const subjectRouter = require('./subject');
const studentRouter = require('./student');

router.get('/', HomeController.home);
router.use('/teachers', teacherRouter);
router.use('/subjects', subjectRouter);
router.use('/students', studentRouter);
router.get('/*', HomeController.notFound);

module.exports = router;