const path = require('path');
const sequelize = require('sequelize')
const models = require('../models');
const Group = require('./Group');
const SecretFriend = require('./SecretFriend');

module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        preferences: {
            type: dataTypes.STRING,
            allowNull: true
        },
        dislikes: {
            type: dataTypes.STRING,
            allowNull: true
        },
        admin: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }
    }
    let config = {
        tableName: 'Users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsToMany(Group, {
            as: 'Group',
            through: 'GroupMember',
            foreignKey: 'user_id',
            otherKey: 'group_id',
            timestamps: false
        })
        User.belongsTo(SecretFriend, {
            foreignKey: 'user_id',
            as: 'SecretFriend'
        })
    }

    return User;
}