// requirements and installations
const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// routes
router.get('/', groupController.index);
router.get('/create', groupController.create);
router.post('/create/', groupController.store);
router.get('/edit', groupController.edit);
router.put('/edit/', groupController.update);
router.delete('/edit/delete', groupController.delete);

// router export
module.exports = router;