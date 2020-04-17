class PagesController{

  static getHome(req, res) {
    res.send('PageHome')
  }
}

module.exports = PagesController