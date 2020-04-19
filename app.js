const express = require ('express')
const app = express ()
const port = 3000
const route = require('./routes/index')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

//routing
app.use('/',route)

/// porting
app.listen (port,(err,res)=> {
    console.log(`this app run on port ${port}`)
})