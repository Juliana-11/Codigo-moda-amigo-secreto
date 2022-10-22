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
    return Group;

}