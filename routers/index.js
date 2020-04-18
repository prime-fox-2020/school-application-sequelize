const router = require("express").Router()

const studentRouter= require('./studentRouter')
const subjectRouter = require('./subjectRouter')
const teacherRouter = require('./teacherRouter')

router.use('/students', studentRouter)
router.use('/subjects', subjectRouter)
router.use('/teachers', teacherRouter)

router.get("/", (req, res) => {
  res.render("home");
});


module.exports = router;
