// Controller object
mainController = {
    // index: renders home page
    index: (req, res) => {
        res.render('home');
    }
}
// Controller export
module.exports = mainController;