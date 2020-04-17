const express = require('express')
const ModelAll = require('./models')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/students', (req, res) => {
  ModelAll.Student.findAll({})
    .then(data => {res.send(data)})
    .catch(err=> {res.send(err)})
})

app.listen(PORT)