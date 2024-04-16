"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation_Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservation_Room.init(
    {
      roomId: DataTypes.INTEGER,
      reservationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reservation_Room",
    }
  );
  return Reservation_Room;
};