
const Teachers = require("../models").Teacher;

class TeachersController {
  static list(req, res) {
    Teachers.findAll({
      order:[
        ['id','asc']
      ]
    })
      .then((teachers) => {
        res.render("teachers", { teachers });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getId(req,res){
    Teachers.findAll({
      where:{
        id: req.params.id
      }
    })
    .then(teachers=>{
      console.log(teachers[0].dataValues);
      res.render('searchbyid', {teachers:[teachers[0].dataValues]})
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = TeachersController;
