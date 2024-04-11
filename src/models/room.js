"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      // define association here
      Room.belongsTo(models.Hotel, { foreignKey: 'hotelId' }); 
    }
  }

  Room.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.FLOAT,
      max_people: DataTypes.INTEGER,
      description: DataTypes.STRING,
      room_numbers: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );

  return Room;
};
