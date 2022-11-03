const {body} = require('express-validator');
const db = require('../../dataBase/models'); 
//Validations 
 let validations = [
    body('firstName')
        .notEmpty().withMessage('Ingresa tu nombre').bail()
        .isLength({min:3}).withMessage('No se puede registrar un nombre de menos de 3 caracteres'),
    body('lastName')
        .notEmpty().withMessage('Ingresa tu apellido').bail()
        .isLength({min:3}).withMessage('No se puede registrar un apellido de menos de 3 caracteres'),
    body('userAs')
        .notEmpty().withMessage('Identificate para jugar').bail()
        .isLength({min:6}).withMessage('Debe contener minimo 6 caracteres')
        .custom(
            (value,{req})=> {
                let usedUser = false ;
                for (let i = 0; i < db.User.length; i++) {
                    if(db.User[i].userName === req.body.userAs){
                        usedUser = true
                    }
                }

                if (usedUser === true){
                    throw new Error('*Usuario ya registrado');
                }
                return true
            } 
        ),
    body('password')
        .notEmpty().withMessage('Create una contraseña').bail()
        .isLength({min:8}).withMessage('Debe contener minimo 8 caracteres'),

    body('confirmPassword')
        .notEmpty().withMessage('La confirmacion de contraseña no coincide')
]

module.exports = validations