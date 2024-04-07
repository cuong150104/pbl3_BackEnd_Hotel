"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {
      // define association here
    }
  }

  Hotel.init(
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      cheapest_price: DataTypes.FLOAT,
      rating: DataTypes.FLOAT,
      photos: DataTypes.JSON, // Assuming you store photo URLs as JSON
    },
    {
      sequelize,
      modelName: "Hotel",
    }
  );

  return Hotel;
};
