// Controller object
userController = {
    // register: shows registration form
    register: (req, res) => {
        res.render('register')
    },
    // signIn: saves registration data
    signIn: (req, res) => {

    },
    //AdminProfile: shows the view of the admin 
    adminProfile: (req, res) => {
        res.render('adminView')
    }
}
// Controller export
module.exports = userController;