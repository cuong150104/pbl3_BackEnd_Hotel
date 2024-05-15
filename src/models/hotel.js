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
      category: DataTypes.STRING,//loai hotel
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      description:DataTypes.STRING,
      phone: DataTypes.STRING,
      country: DataTypes.STRING,
      photos: DataTypes.JSON, // Assuming you store photo URLs as JSON
      distance :DataTypes.STRING,
      rating:DataTypes.FLOAT,
      cheapestPrice:DataTypes.FLOAT,
      accountId: DataTypes.INTEGER,
    
    },
    {
      sequelize,
      modelName: "Hotel",
    }
  );

  return Hotel;
};