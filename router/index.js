const router = require('express').Router();

const studentsRouter = require('./students');
const teachersRouter = require('./teachers');
const subjectsRouter = require('./subjects');

router.use('/students', studentsRouter);
router.use('/teachers', teachersRouter);
router.use('/subjects', subjectsRouter);

router.get('/', (req, res) => {
  res.render('home');
})

router.get('/*', (req, res) => {
  res.render('error', {msg: 'Page not found'});
})

module.exports = router;