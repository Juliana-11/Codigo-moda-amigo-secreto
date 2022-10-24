const models = require('../models');
const User = require('./User');
module.exports = (sequelize, dataTypes) => {
    let alias = 'Group'
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull:false,
            type: dataTypes.INTEGER
        },
        groupName: {
            type: dataTypes.VARCHAR,
            allowNull: false
        }
    }
    let config = {
        tableName: 'Groups',
        timestamps: false
    }
    const Group = sequelize.define(alias, cols, config);

    Group.associate = function(models) {
        Group.belongsToMany(User, {
            as: 'Members',
            through: 'GroupMember',
            foreignKey: 'group_id',
            otherKey: 'user_id',
            timestamps: false
        })
    }
    return Group;

}