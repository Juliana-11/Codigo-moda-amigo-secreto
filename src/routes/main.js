// requirements and installations
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

// routes
router.get('/', mainController.index);

// router export
module.exports = router;