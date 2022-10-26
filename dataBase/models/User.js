module.exports = (Sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        idUsuario: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
            allowNull: false,
            unique: true
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
        allergies: {
            type: dataTypes.STRING,
            allowNull: true
        },
        admin: {
            type: dataTypes.BOOLEAN,
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    const User = Sequelize.define(alias, cols, config);

    /*User.associate = function(models){ 
        User.belongsToMany(models.Group, {
            as: "Group",
            through: "GroupMembers",
            foreignKey: "user_id",
            otherKey: "group_id",
            timestamps: false
        })
        User.hasMany(models.Partner, {
            as: "user_id1",
            foreignKey: "idUsuario",
        })
        User.hasMany(models.Partner, {
            as: "user_id2",
            foreignKey: "idUsuario",
        })
        
    }*/

    return User;
}