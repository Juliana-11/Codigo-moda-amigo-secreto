// requirements and installations
const express = require('express');
const router = express.Router();
const path = require('path');
const groupController = require('../controllers/groupController');
const multer = require('multer');

// Multer configuration
let diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.resolve(__dirname, '.../public/groupPictures');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let imageName = Date.now + path.extname(file.originalname);
        cb(null, imageName);
    }
})
var upload = multer({storage: diskStorage});

// routes
router.get('/', groupController.index);
router.get('/create', groupController.create);
router.post('/create/', upload.single('groupPicture'), groupController.store);
router.get('/edit/:id', groupController.edit);
router.put('/edit/:id/', groupController.update);
router.delete('/edit/delete', groupController.delete);

// router export
module.exports = router;