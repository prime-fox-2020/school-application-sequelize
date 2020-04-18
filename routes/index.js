const route = require ('express').Router()
const studentscontroller = require('../controllers/students')
// const subjectscontroller = require('../controllers/subject')
// const teacherscontroller = require('../controllers/teacher')

route.get('/', (req,res)=>{
    res.render('home')
})

//wajib
// route.get('/students/:email',studentscontroller.selectEmail)
// route.get('/teachers/:id',teacherscontroller.selectId)
// route.get('/subjects/:id',subjectscontroller.selectId)

//view
route.get('/students',studentscontroller.viewStudents)
// route.get('/subjects',subjectscontroller.viewSubjects)
// route.get('/teachers',teacherscontroller.viewTeachers)

//get & post CRUD 
// route.get('/student/:id/edit',studentscontroller.edit)
// route.post('/student/:id/edit',studentscontroller.change)
// route.get('/student/:id/delete',studentscontroller.delete)
// route.get('/student/add',studentscontroller.addForm)
// route.post('/student/add',studentscontroller.add)

//get & post CRUD 
// route.get('/teacher/:id/edit',teacherscontroller.edit)
// route.post('/teacher/:id/edit',teacherscontroller.change)
// route.get('/teacher/:id/delete',teacherscontroller.delete)
// route.get('/teacher/addteacher',teacherscontroller.addForm)
// route.post('/teacher/addteacher',teacherscontroller.add)

// route.get('/subject/:id/edit',subjectcontroller.editSubject)