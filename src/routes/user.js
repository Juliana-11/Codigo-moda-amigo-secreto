// requirements and installations
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// router
<<<<<<< HEAD
//router.get('/', userController.profile);
router.get('/register', userController.register);
router.post('/', userController.signIn);
//router.get('/login', userController.login);
//router.get('/ProfileEdit', userController.profileEdit);
=======
router.get('/register', userController.register)
router.get('/adminProfile', userController.adminProfile)
>>>>>>> dbc59bdae087e1e458723a78eb38818bbce22d4a

// router export
module.exports = router;