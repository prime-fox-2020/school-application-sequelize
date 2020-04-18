const router = require('express').Router()

const SubjectController = require('../controllers/subjectController')

router.get('/', SubjectController.showSubject)
router.get('/add', SubjectController.addForm)
router.post('/add', SubjectController.addPost)
router.get('/delete/:id', SubjectController.delete)
router.get('/edit/:id', SubjectController.editGet)
router.post('/edit/:id', SubjectController.editPost)
router.get('/:id', SubjectController.findId)

module.exports = router