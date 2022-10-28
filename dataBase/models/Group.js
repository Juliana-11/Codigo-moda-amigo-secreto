module.exports = (sequelize, dataTypes) => {
    let alias = 'Group'
    let cols = {
        idGroup: {
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
            type: dataTypes.INTEGER
        },
        nameGroup: {
            type: dataTypes.STRING ,
            allowNull: false,
            unique: true
        }
    }
    let config = {
        tableName: 'groups',
        timestamps: false
    }
    const Group = sequelize.define(alias, cols, config);

    Group.associate = function(models){
        Group.belongsToMany(models.User, {
            as: "Members",
            through: "GroupMembers",
            foreignKey: 'group_id',
            otherKey: 'user_id',
            timestamps: false
        })
        Group.belongsTo(models.User, {
            as: "Member",
            foreignKey: "idGroup"
        })
        
    }
    return Group;
}