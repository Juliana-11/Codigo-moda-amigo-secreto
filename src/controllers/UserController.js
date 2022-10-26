const path = require('path');
const db = require('../../dataBase/models');
const { Op } = require("sequelize");

//modelos
const Groups = db.Group;
const GroupMembers = db.GroupMember;
const SecretFriends = db.SecretFriend;
const Users = db.User;

const UserController = {
    list: (req, res) =>{
        Users.findAll({
            include: [
                {association: "Group"},
                {association: "user_id1"},
                {association: "user_id2"}
            ],
            raw: true,
            nest: true
        })
        .then(users =>{
            res.render('./tests/test', {users})
        })
    },
    friends: (req, res) =>{
        SecretFriends.findAll()
        .then(friend => {
            res.render('./tests/test2', {friend})
        })
    },
    member: (req, res) => {
        GroupMembers.findAll()
        .then(member =>{
            res.render('./tests/test3', {member})
        })
    },
    group: (req, res) => {
        Groups.findAll()
        .then(group => {
            res.render('./tests/test4', {group})
        })
    }
}

module.exports = UserController;