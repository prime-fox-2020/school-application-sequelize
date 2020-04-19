const express = require('express');
const router = express.Router();

const SubjectCount = require('../controllers/subejctsCont').SubjectCont;

router.get('/', SubjectCount.show)

module.exports = {
    router
};
