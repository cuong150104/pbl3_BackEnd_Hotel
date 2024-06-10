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
      Reservation.belongsTo(models.Hotel, {
        foreignKey: "hotelId",
        as: "hotel",
      });
      Reservation.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Reservation.init(
    {
        // userId: DataTypes.INTEGER,
        // hotelId: DataTypes.INTEGER,
        // roomId: DataTypes.INTEGER,
        // // typeRoom: DataTypes.STRING,
        // roomCount: DataTypes.INTEGER,
        // totalPrice:DataTypes.FLOAT,
        // reservationStatus: DataTypes.STRING,
        // discountPercent: DataTypes.FLOAT,
        // description: DataTypes.STRING,
        // isPayment: DataTypes.STRING,
        // startDate: DataTypes.DATE,
        // endDate: DataTypes.DATE,
        // reservationDate: DataTypes.DATE,
        userId: DataTypes.INTEGER,
        hotelId: DataTypes.INTEGER,
        //roomId: DataTypes.INTEGER,
        // typeRoom: DataTypes.STRING,
        roomCount: DataTypes.INTEGER,
        totalPrice: DataTypes.FLOAT,
        reservationStatus: DataTypes.INTEGER,
        discountPercent: DataTypes.FLOAT,
        description: DataTypes.STRING,
        isPayment: DataTypes.BOOLEAN,
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