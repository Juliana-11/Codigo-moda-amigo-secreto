// Requirements and installations
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainController = require('../controllers/mainController')

// Config multer
/*const storage = multer.diskStorage({
    destination: function (req, file, cb){
        let folder = path.resolve(__dirname, '../public/img')
        Cb(null, folder );
    },
    Filename: function (req, file, cb){
        let imgName = Date.now() + path.extname(file.originalname)
        Cb(null, imgName);
    }
})
const upload = multer({storage: multerDiskStorage});*/

//Validations 
const {check} = require('express-validator');
const db = require('../../dataBase/models')
const validations = [
    check('firstName')
        .notEmpty().withMessage('Ingresa tu nombre').bail()
        .isLength({min:3}).withMessage('No se puede registrar un nombre de menos de 3 caracteres'),
    check('lastName')
        .notEmpty().withMessage('Ingresa tu apellido').bail()
        .isLength({min:3}).withMessage('No se puede registrar un apellido de menos de 3 caracteres'),
    check('userAs')
        .notEmpty().withMessage('Identificate para jugar').bail()
        .isLength({min:8}).withMessage('Debe contener minimo 8 caracteres')
        .custom(
            (value,{req})=> {
                let usedUser = false ;
                for (let i = 0; i < db.User.length; i++) {
                    if(db.User[i].userName === req.body.userAs){
                        usedUser = true
                    }
                }

                if (usedUser === true){
                    throw new Error('* Usuario ya registrado');
                }
                return true
            } 
        ),
    check('password')
        .notEmpty().withMessage('Create una contraseña').bail()
        .isLength({min:8}).withMessage('Debe contener minimo  caracteres')
        .equals('password', 'confirmPassword').withMessage('La contraseña no coincide'),
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