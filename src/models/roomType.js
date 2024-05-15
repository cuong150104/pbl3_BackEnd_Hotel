"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Room_Type extends Model {
    static associate(models) {
      // define association here
      Room_Type.hasMany(models.Room, { foreignKey: "roomTypeId" });

      
    }
  }

  Room_Type.init(
    {
      type_name: DataTypes.STRING,
      countRoom: DataTypes.INTEGER,
      room_image:  DataTypes.JSON,
      max_people: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      yourChoices:DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Room_Type",
    }
  );

  return Room_Type;
};
