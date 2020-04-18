class PageController {
    static getHome(req, res) {
        res.render('./index');
    }

    static notFound(req, res) {
        res.render('./error', {msg: "Page not found."});
    }
}

module.exports = PageController;    