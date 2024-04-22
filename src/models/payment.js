"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    }
    Payment.init(
        {
            reservationId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            qrCode: DataTypes.JSON,
            qr_code_url:DataTypes.JSON,
            paymentStatus: DataTypes.STRING,
            totalAmount:DataTypes.FLOAT,
            discount:DataTypes.FLOAT,
           
        },
        {
            sequelize,
            modelName: "Payment",
        }
    );
    return Payment;
};