//requirements and installations
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../dataBase/models'); 
const User = require('../../dataBase/models/User');

//models
const Groups = db.Group;
const GroupMembers = db.GroupMember;
const Users = db.User;

// Controller object
mainController = {
    //home: render home
    home: (req, res) => {
        res.render('home')
    },

    //instruction: 
    instruction:(req, res)=>{
        res.render('instructions')
    },
    // index: renders info friend page
    index: (req, res) => {
        let orderGroup = Groups.findByPk(req.params.id)

        let orderFriend =  Users.findByPk(req.params.id)

        Promise.all([orderGroup, orderFriend])
            .then(([group, user])=>{
                res.render('index', {group, user});
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
        Groups.findAll()
        .then(groups => {
            res.render('register', {groups})
        })
    },

    // signIn: saves registration data
    signIn: (req, res) => {
        const errors = validationResult(req)
    
            /*<<<< When error is not empty >>>>*/
        if(errors.errors.length > 0){
            return res.render('register', {errors: errors.mapped(), oldData: req.body});
        }else {
            /*<<<< when error is empty >>>>*/
            Users.create({
                name: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userAs,
                password: bcrypt.hashSync(req.body.password, 10),
                preferences: req.body.preferences,
                dislikes: req.body.dislikes,
                allergies: req.body.allergies,
            });
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
        let users = Users.findAll().then(users => {users});
        let userToLogin = req.body.userAs;
        let userExists = false;
        let usuario;

        console.log(usuario)
        console.log(users);
        for (let i = 0; i < users.length && userExists == false; i++) { 
            if(users[i].userName == userToLogin){
                userExists = true;
                usuario = users[i]
            }
        }

        if(userExists == true){
            let passwordValidation = bcrypt.compareSync(req.body.password, usuario.password)
        
            if(passwordValidation){
                res.redirect('/profile/' + usuario.idUsuario)
            }
        }
    }
}
// Controller export
module.exports = mainController;