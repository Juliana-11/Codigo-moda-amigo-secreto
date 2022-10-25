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
router.delete('/profileEdit/delete', mainController.deleteProfile);
router.put('/profileEdit/', mainController.update);
router.get('/adminProfile', mainController.adminProfile);

// router export
module.exports = router;