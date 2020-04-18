const router=require('express').Router()
const studentsController=require('../controller/studentsController')

router.get('/',studentsController.show)
router.get('/add',studentsController.add)
router.post('/add',studentsController.addPost)
router.get('/:id/delete',studentsController.delete)
router.get('/:id/edit',studentsController.editGet)
router.post('/:id/edit',studentsController.editPost)
router.get('/:email',studentsController.email)

module.exports=router