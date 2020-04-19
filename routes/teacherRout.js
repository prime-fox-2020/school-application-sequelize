const express = require('express');
const router = express.Router();

const TeacherCount = require('../controllers/teacherCont').TeacherCont;

router.get('/', TeacherCount.show)

module.exports = {
    router
}
