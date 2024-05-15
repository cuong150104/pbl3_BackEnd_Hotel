"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      // define association here
      Room.belongsTo(models.Hotel, { foreignKey: 'hotelId' }); 
      Room.belongsTo(models.Room_Type, { foreignKey: 'roomTypeId' }); 
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
    },
    {
      sequelize,
      modelName: "Room",
    }
  );

  return Room;
};
