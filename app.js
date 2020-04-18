const express = require('express')
const app = express()

const routers = require('./routes')
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', routers)

app.listen(PORT, ()=>{
    console.log("Listening at ", PORT)
})