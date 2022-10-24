const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {
    let alias = 'GroupMemeber'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        user_id: {
            foreignKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        group_id: {
            foreignKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: 'Group members',
        timestamps: false
    }
    const GroupMemeber = sequelize.define(alias, cols, config);
    return GroupMemeber;
}