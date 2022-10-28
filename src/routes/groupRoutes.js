// requirements and installations
const express = require('express');
const router = express.Router();
const path = require('path');
const groupController = require('../controllers/groupController');
const multer = require('multer');
const {check} = require('express-validator');

// Multer configuration
let diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.resolve(__dirname, '../../public/img');
        cb(null, folder);
    },
    filename: (req, file, callback) => {
        let imageName = Date.now() + "_img_" + path.extname(file.originalname)
        callback(null, imageName);
    }
})
var upload = multer({storage: diskStorage});

// validations
let validations = {
    groupCreation: [
        check('groupName').notEmpty().withMessage('Debes asignar un nombre al grupo')
    ]
}

// routes
router.get('/', groupController.index);
router.get('/:id', groupController.detail);
router.get('/create', groupController.create);
router.post('/create/', upload.single('groupPicture'), groupController.store);
router.get('/edit/:id', groupController.edit);
router.put('/edit/:id/', validations.groupCreation, groupController.update);
router.delete('/edit/delete', groupController.delete);


// router export
module.exports = router;