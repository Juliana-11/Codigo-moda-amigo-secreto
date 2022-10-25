module.exports = (sequelize, dataTypes) => {
    let alias = 'GroupMember'
    let cols = {
        idGroupMember: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        group_id: {
            foreignKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            foreignKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }
    let config = {
        tableName: 'groupmembers',
        timestamps: false
    }
    const GroupMemeber = sequelize.define(alias, cols, config);


    return GroupMemeber;
}