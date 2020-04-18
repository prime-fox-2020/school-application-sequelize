const router=require('express').Router()
const teachersController=require('../controller/teacherController')

router.get('/',teachersController.show)
router.get('/:id',teachersController.getData)

module.exports=router
