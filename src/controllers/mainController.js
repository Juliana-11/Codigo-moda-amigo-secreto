//requirements and installations
//const {check} = require('express-validator');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../dataBase/models'); 
const User = require('../../dataBase/models/User');

//models
const Groups = db.Group;
const GroupMembers = db.GroupMember;
const SecretFriends = db.SecretFriend;
const Users = db.User;

// Controller object
mainController = {
    // index: renders home page
    index: (req, res) => {
        let orderGroup = Groups.findByPk(req.params.id)

        let orderFriend =  Users.findByPk(req.params.id)

        Promise.all([orderGroup, orderFriend])
            .then(([group, user])=>{
                res.render('home', {group, user});
            })
    },

    // profile: shows user information
    profile: (req, res) => {
        Users.findByPk(req.params.id)
            .then(user => {
                res.render('profile', {user});
            })
    },

    // profileEdit: renders profile editor
    profileEdit: (req, res) => {
        Users.findByPk(req.params.id)
        .then(user => {
            res.render('profileEdit', {user});
        })

    },

    // update: processes profile editions
    update: (req, res) => {
        Users.update({
            name: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userAs,
            password: bcrypt.hashSync(req.body.password, 10),
            preferences: req.body.preferences,
            dislikes: req.body.dislikes,
            allergies: req.body.allergies,
            admin: req.body.role === "Lider" ? true : false
        }, {
            where: {
                idUsuario: req.params.id 
            }
        });

        res.redirect('/profile/' + req.params.id)
    },

    // delete: deletes profile
    deleteProfile: (req, res) => {
        Users.destroy({
            where:{
                idUsuario: req.params.id
            }
        })
        res.redirect('/register')
    },
    
    // register: shows registration form
    register: (req, res) => {
       res.render('register')
    },

    // signIn: saves registration data
    signIn: (req, res) => {
        let errors = validationResult(req)

        /*<<<< When error is empty >>>>*/
        if(errors.isEmpty()){
            Users.create({
                name: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userAs,
                password: bcrypt.hashSync(req.body.password, 10),
                preferences: req.body.preferences,
                dislikes: req.body.dislikes,
                allergies: req.body.allergies,
            });

        /*<<<< Validation UserAs >>>>*/
            let usedUser = false;
            for (let i = 0; i < Users.length; i++) {
                if(Users[i].userName === req.body.userAs){
                    usedUser = true
                }
                
                if(usedUser === true){
                let existingUserMessage = { mgs: 'Ya existe un usuario registrado con esa descripción' }
                let oldData = req.body;

                res.render('/register',{msgError: existingUserMessage, oldData});
                }
            }

        /*<<<< when error not empty >>>>*/
        }else {
            res.render('/register', {errors: errors.mapped(), old: req.body});
        }

        /*<<<< After creating >>>>*/
        res.redirect('/login')
    },

    // login: renders login form
    login: (req, res) => {
        res.render('login');
    },
    // session: processes login info
    session:  (req, res) =>{

    },

    
    //AdminProfile: shows admins view
    adminProfile: (req, res) => {
        res.render('adminView')
    },
}
// Controller export
module.exports = mainController;