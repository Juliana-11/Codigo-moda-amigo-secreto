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
        },
        group_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    const User = Sequelize.define(alias, cols, config);

    User.associate = function(models){ 
        User.belongsToMany(models.Group, {
            as: "Group",
            through: "GroupMembers",
            foreignKey: "user_id",
            otherKey: "group_id",
            timestamps: false
        })
        User.belongsTo(models.Group, {
            as: "Member",
            foreignKey: "group_id"
        })
        User.belongsTo(models.GroupMember, {
            as: "usuarioPrueba",
            foreignKey: "idUsuario",
        })
    }

    return User;
}