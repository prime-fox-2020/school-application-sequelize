class homeController{
    static show(req,res){
        res.render('home')
    }

    static notFound(req,res){
        res.render('error')
    }
}

module.exports = homeController