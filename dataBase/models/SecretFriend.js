module.exports = (sequelize, dataTypes) => {
    let alias = 'Partner'
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

    /*SecretFriends.associate = function(models){
        SecretFriends.belongsTo(models.User, {
            as: "userId1",
            foreignKey: "user_id1",
        })
        SecretFriends.belongsTo(models.User, {
            as: "userId2",
            foreignKey: "user_id2",
        })
    }*/
    return SecretFriends;
}