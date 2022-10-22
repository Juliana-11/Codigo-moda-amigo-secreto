// requirements and installations
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// router
//router.get('/', userController.profile);
router.get('/register', userController.register);
router.post('/', userController.signIn);
//router.get('/login', userController.login);
//router.get('/ProfileEdit', userController.profileEdit);

// router export
module.exports = router;