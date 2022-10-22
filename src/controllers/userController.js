// Controller object
userController = {
    // register: shows registration form
    register: (req, res) => {
        res.render('register')
    },
    // signIn: saves registration data
    signIn: (req, res) => {

    }
}
// Controller export
module.exports = userController;