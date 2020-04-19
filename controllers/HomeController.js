
class HomeController {
    static getHome(req, res){
        // res.send(`this is from HomeController`)
        res.render('home')
    }

    static notFound(req, res){
        res.render('error', { error: `Warning! Page Error - 404`})
    }

}
module.exports = HomeController;