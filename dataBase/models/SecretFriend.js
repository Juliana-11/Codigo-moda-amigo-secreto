module.exports = (sequelize, dataTypes) => {
    let alias = 'SecretFriend'
    let cols = {
        idSecretFriend: { 
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        user_id1: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        user_id2: {
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

    SecretFriends.associate = function(models){
        SecretFriends.belongsTo(models.User, {
            as: "Partner1",
            foreignKey: "idUsuario", 
        })
        /*SecretFriends.belongsTo(models.User, {
            as: "Partner2",
            foreignKey: "user_id2",
        })*/
    }
    return SecretFriends;
}