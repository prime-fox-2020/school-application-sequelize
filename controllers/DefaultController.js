class DefaultController{
    static getHome(req, res){
        res.render('home')
    }

    static notFound(req, res){
        res.render('error', {err: '404 ERROR - PAGE NOT FOUND'})
    }
}

module.exports = DefaultController