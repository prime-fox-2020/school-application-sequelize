
const express = require('express')
const ControllerSubjects = require('../controller/subjectsController.js')

const routes = express.Router()

routes.get('/subjects', ControllerSubjects.getAll)
routes.get('/subjects/:id',ControllerSubjects.getId)

module.exports = routes