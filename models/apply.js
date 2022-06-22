
const applyModel = (sequelize, DataTypes) => {
    const Apply = sequelize.define('Apply', {
        applyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        position: {
            type: DataTypes.STRING
        },
        compensationMoney: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        applyContent: {
            type: DataTypes.STRING
        },
        skill: {
            type: DataTypes.STRING
        }

    }, {
        // Other model options go here
        timestamps: false,
        tableName: 'apply',
    });




    return Apply;
}


module.exports = applyModel;

