const express = require('express');
const app = express()
const port = 3000

const router = require('./routes');

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))

// app.get('/', (req, res) => {
//     res.send('Ini di app')
// })

app.use('/', router)

app.listen(port, () => {
    console.log('App listening in port :', port);
})
