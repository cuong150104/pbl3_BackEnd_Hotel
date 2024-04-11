"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {
      // define association here
      Hotel.hasMany(models.Room, { foreignKey: 'hotelId' });
    }
  }

  Hotel.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      distance:DataTypes.STRING,
      photos: DataTypes.JSON, // Assuming you store photo URLs as JSON
      title:DataTypes.STRING,
      description:DataTypes.STRING,
      rating:DataTypes.FLOAT,
      rooms:DataTypes.JSON,
      cheapestPrice:DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Hotel",
    }
  );

  return Hotel;
};