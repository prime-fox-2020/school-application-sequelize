const express = require('express');
const router = express.Router();

const studentRout = require('./studentRout').router;
const teacherRout = require('./teacherRout').router;
const subjectRout = require('./subjectRout').router;

const Home = require('../controllers/home').Home;

// router.get('/', (req, res) => {
//     res.send('in routers')
// })

router.get('/', Home.home)

router.use('/students', studentRout)
router.use('/teachers', teacherRout)
router.use('/subjects', subjectRout)

module.exports = router;
