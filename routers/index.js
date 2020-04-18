const router=require('express').Router()
const homeController=require('../controller/homeController')
const studentController=require('./students.js')
const teacherController=require('./teacher')
const subjectController=require('./subject')

router.get('/',homeController.show)
router.use('/students',studentController)
router.use('/teachers',teacherController)
router.use('/subjects',subjectController)

module.exports=router