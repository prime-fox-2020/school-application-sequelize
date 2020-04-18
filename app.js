const express =require('express')
const app = express()
const port = 3000
const studentsRoutes = require('./routes/students.js')
const teachersRoutes = require('./routes/teachers.js')
const subjectsRoutes = require('./routes/subjects.js')

app.listen(port,()=>{
    console.log(`App Online. Port: ${port}`)
})
app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))

app.get('/',(request,respond)=>{
    respond.render('home')
})
app.use(studentsRoutes)
app.use(teachersRoutes)
app.use(subjectsRoutes)