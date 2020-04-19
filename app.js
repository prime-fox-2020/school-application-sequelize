const express = require('express')
const app = express()

const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const router = require('./routers')

app.use('/', router)

app.listen(PORT, () => {
    console.log(`App is online on port ${PORT}`)
})