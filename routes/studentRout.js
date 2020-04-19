const express = require('express');
const router = express.Router();

const StudentsCont  = require('../controllers/studentCont').StudentCont;

// router.get('/', (req, res) => {
//     res.send('in routers student')
// })

router.get('/', StudentsCont.show)

router.get('/:id/delete', StudentsCont.delete)

router.get('/:id/edit', StudentsCont.editForm)
router.post('/:id/edit', StudentsCont.update)

router.get('/add', StudentsCont.addForm)
router.post('/add', StudentsCont.add)

module.exports = {
    router
};
