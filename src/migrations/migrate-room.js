"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Room", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      max_people: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
     
      roomNumbers: {
        type: Sequelize.JSON,
      },
      hotelId: {
        type: Sequelize.INTEGER,
      },
      roomTypeId: {
        type: Sequelize.INTEGER,
      },
     





      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Room");
  },
};
