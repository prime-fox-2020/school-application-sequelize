const router = require('express').Router()
const pagesRouter = require('./pagesRouter')
const studentsRouter = require('./studentsRouter')
const subjectsRouter = require('./subjectsRouter')
const teachersRouter = require('./teachersRouter')

router.use('/students', studentsRouter)
router.use('/subjects', subjectsRouter)
router.use('/teachers', teachersRouter)
router.use(pagesRouter)

module.exports = router