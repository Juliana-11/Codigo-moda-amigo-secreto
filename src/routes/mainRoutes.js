// Requirements and installations
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {body} = require('express-validator');
const mainController = require('../controllers/mainController')

// Config multer
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        let folder = path.resolve(__dirname, '../public/img')
        Cb(null, folder );
    },
    Filename: function (req, file, cb){
        let imgName = Date.now() + path.extname(file.originalname)
        Cb(null, imgName);
    }
})
const upload = multer({storage: multerDiskStorage});

//Validations 
const Validations = [
    body('firstName')
]

// Routes
    // Show your secret friend information
router.get('/myFriend/:id', mainController.index);

    //Show my information, the edit form, update and delete 
router.get('/profile/:id', mainController.profile);
router.get('/profileEdit/:id', mainController.profileEdit);
router.post('/profileEdit/:id', mainController.update);
router.post('/profile/delete/:id', mainController.deleteProfile);

    //Show the registration form and Create member
router.get('/register', mainController.register);
router.post('/register', mainController.signIn);

    //Show the login form and session init
router.get('/login', mainController.login);
router.post('/login/', mainController.session);

    //Admin View
router.get('/adminProfile', mainController.adminProfile);

// Router export
module.exports = router;