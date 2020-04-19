class PagesController{

  static getHome(req, res) {
    res.render('index')
  }
}

module.exports = PagesController