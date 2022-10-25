module.exports = (sequelize, dataTypes) => {
    let alias = 'SecretFriend'
    let cols = {
        idSecretFriend: { 
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        user_id: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
        }
    }
    let config = {
        tableName: 'secretfriends',
        timestamps: false
    }
    const SecretFriends = sequelize.define(alias, cols, config);
    return SecretFriends;
}