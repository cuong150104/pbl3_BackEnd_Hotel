"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      // define association here
      Room.belongsTo(models.Hotel, { foreignKey: "hotelId", as: "hotel" });
      Room.belongsTo(models.Room_Type, {
        foreignKey: "roomTypeId",
        as: "roomType",
      });
    }
  }

  Room.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.FLOAT,
      max_people: DataTypes.INTEGER,
      description: DataTypes.STRING,
      roomNumbers: DataTypes.JSON,
      hotelId: DataTypes.INTEGER,
      roomTypeId: DataTypes.INTEGER,
      roomStatus: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );

  return Room;
};