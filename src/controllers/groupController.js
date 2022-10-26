// controller object
const db = require('../../dataBase/models');
const { Sequelize } = require('../../dataBase/models');
const Op = Sequelize.Op
const {validationResult} = require('express-validator');
groupController = {
    // index: renders group detail view
    index: (req, res) => {
        res.render('groupIndex');
    },
    // create: renders group creation form
    create: (req, res) => {
        res.render('groupCreate');
    },
    // store: handles create information
    store: (req, res) => {
        let errors = validationResult(req);
        if(errors){
            db.Group.create({
            name: req.body.groupName,
            description: req.body.groupDescription,
            picture: req.body.groupPicture,
            giftDate: req.body.giftDate,
            giftDateDetail: req.body.giftDateDetail,
            discoveryDate: req.body.discoveryDate,
            discoveryDateDetail: req.body.discoveryDateDetail
            })
            res.redirect('/')
        }else{
            let oldData = req.body
            res.render('groupCreate', {errors: errors.mapped(), oldData})
        }
       
    },
    // edit: renders group edit form
    edit: (req, res) => {
        db.Group.findByPk(req.params.id)
        .then(group => {
            res.render('groupEdit', {group})
        }) 
    },
    // update: handles edit information
    update: (req, res) => {
        let errors = validationResult(req);
        if(errors){
            db.Group.update({
            name: req.body.groupName,
            description: req.body.groupDescription,
            picture: req.body.groupPicture,
            giftDate: req.body.giftDate,
            giftDateDetail: req.body.giftDateDetail,
            discoveryDate: req.body.discoveryDate,
            discoveryDateDetail: req.body.discoveryDateDetail
            })
            res.redirect('/')
        }else{
            let oldData = req.body
            res.render('groupEdit', {errors: errors.mapped(), oldData})
        }
    },
    // delete: deletes groups
    delete: (req, res) => {
        
    }
}

// controller export
module.exports = groupController;