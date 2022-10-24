// Controller object
mainController = {
    // index: renders home page
    index: (req, res) => {
        res.render('home');
    },
    // profile: shows user information
    profile: (req, res) => {
        res.render('profile');
    },
    // register: shows registration form
    register: (req, res) => {
       res.render('register')
    },
    // signIn: saves registration data
    signIn: (req, res) => {
        
    },
    // login: renders login form
    login: (req, res) => {
        res.render('login');
    },
    // session: processes login info
    session:  (req, res) =>{

    },
    // profileEdit: renders profile editor
    profileEdit: (req, res) => {

    },
    // delete: deletes profile
    delete: (req, res) => {

    },
    // update: processes profile editions
    update: (req, res) => {

    },
    //AdminProfile: shows admins view
    adminProfile: (req, res) => {
        res.render('adminView')
    },
}
// Controller export
module.exports = mainController;