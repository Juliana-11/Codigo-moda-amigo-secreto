// controller object
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

    },
    // edit: renders group edit form
    edit: (req, res) => {
        res.render('groupEdit');
    },
    // update: handles edit information
    update: (req, res) => {

    },
    // delete: deletes groups
    delete: (req, res) => {

    }
}

// controller export
module.exports = groupController;