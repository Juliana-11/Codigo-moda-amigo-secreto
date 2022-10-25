// requirements and installations
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

// routes
router.get('/', mainController.index);
router.get('/user', mainController.profile);
router.get('/register', mainController.register);
router.post('/register/', mainController.signIn);
router.get('/login', mainController.login);
router.post('/login/', mainController.session);
router.get('/profileEdit', mainController.profileEdit);
<<<<<<< HEAD:src/routes/mainRoutes.js
router.delete('/profileEdit/delete', mainController.deleteProfile);
=======
//profile.delete('/profileEdit/delete', mainController.deleteProfile);
>>>>>>> c62f6b47f6723dc30feda83c39d030f6a3473f8b:src/routes/main.js
router.put('/profileEdit/', mainController.update);
router.get('/adminProfile', mainController.adminProfile);

// router export
module.exports = router;