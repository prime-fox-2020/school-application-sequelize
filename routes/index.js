const router = require('express').Router();
const home = require('../controllers/homeController')

const teachers = require('./teacher')
const subjects = require('./subject')
const students = require('./student')

router.get('/', home.home);



router.use('/teachers', teachers)
router.use('/subjects', subjects)
router.use('/students', students)


module.exports = router
