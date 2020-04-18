const router=require('express').Router()
const subjectController=require('../controller/subjectController')

router.get('/',subjectController.show)
router.get('/:id',subjectController.getData)

module.exports=router