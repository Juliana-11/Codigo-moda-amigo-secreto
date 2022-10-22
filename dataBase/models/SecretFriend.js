const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Secret Friends'
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
        User1_id: {
            foreignKey: true,
            type: dataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
        User2_id: {
            foreignKey: true,
            type: dataTypes.INTEGER,
            unique: true,
            allowNull: false,
        }
    }
    let config = {
        tableName: 'Secret Friends',
        timestamps: false
    }
    const SecretFriend = sequelize.define(alias, cols, config);
    return SecretFriend;
}