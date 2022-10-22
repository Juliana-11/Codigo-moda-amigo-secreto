// Controller object
mainController = {
    // index: renders home page
    index: (req, res) => {
        res.render('index');
    }
}
// Controller export
module.exports = mainController;