// Requirements and installations
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainController = require('../controllers/mainController')
const db = require('../../dataBase/models')

//MIDDLEWARES
//const upload = require('../middleware/multerMiddleware')
const validations = require('../middleware/validationsMiddleware')

// Routes
    //Show home
router.get('/', mainController.home)

    //Show instruction the game
router.get('/instructions', mainController.instruction)

    // Show your secret friend information
router.get('/myFriend/:id', mainController.index);

    //Show user information 
router.get('/profile/:id', mainController.profile);

    //Show the edit form
router.get('/profileEdit/:id', mainController.profileEdit);

    //Update user information 
router.post('/profileEdit/:id', mainController.update);

    //Delete user
router.post('/profile/delete/:id', mainController.deleteProfile);

    //Show the registration form 
router.get('/register', mainController.register);

    //Create member
router.post('/register', [validations], mainController.signIn);

    //Show the login form 
router.get('/login', mainController.login);

    //Session init
router.post('/login', mainController.session);

// Router export
module.exports = router;