const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('Order', {
    // Model attributes are defined here
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rawCost: {
        type: DataTypes.FLOAT
        // allowNull defaults to true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER
    }
    }, {
    // Other model options go here
    });

    return Order;
};