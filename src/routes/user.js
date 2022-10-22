// requirements and installations
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// router
router.get('/register', userController.register)
router.get('/adminProfile', userController.adminProfile)

// router export
module.exports = router;