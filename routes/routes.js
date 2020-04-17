const Router = require('express').Router()
const homeController = require('../controller/homeController')
const teacherRoute = require('./teacherRoute')
const studentRoute = require('./studentRoute')
const subjectRoute = require('./subjectRoute')

Router.get('/', homeController.show)
Router.use('/teacher', teacherRoute)
Router.use('/student', studentRoute)
Router.use('/subject', subjectRoute)
Router.get('/*', homeController.notFound)

module.exports = Router