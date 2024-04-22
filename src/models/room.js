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
      roomNumbers: DataTypes.JSON,
      hotelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );

  return Room;
};
