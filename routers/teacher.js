const router=require('express').Router()
const teachersController=require('../controller/teacherController')

router.get('/',teachersController.show)
router.post('/',teachersController.postData)
router.get('/:id',teachersController.getData)

module.exports=router
