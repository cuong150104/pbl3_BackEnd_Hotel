"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  }
  Reservation.init(
    {
        userId: DataTypes.INTEGER,
        hotelId: DataTypes.INTEGER,
        roomCount: DataTypes.INTEGER,
        totalPrice:DataTypes.FLOAT,
        reservationStatus: DataTypes.STRING,
        discountPercent: DataTypes.FLOAT,
        description: DataTypes.STRING,
        isPayment: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        reservationDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Reservation",
    }
  );
  return Reservation;
};