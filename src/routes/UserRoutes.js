const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/list', UserController.list);
router.get('/friends', UserController.friends);
router.get('/member', UserController.member)
router.get('/group', UserController.group)

module.exports = router;