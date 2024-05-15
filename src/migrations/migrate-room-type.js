"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Room_Type", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_name: {
        type: Sequelize.STRING,
      },
      countRoom:
      {
        type: Sequelize.INTEGER,
      },
      room_image: {
        type:  Sequelize.JSON,
      },
      max_people: {
        type: Sequelize.INTEGER,
      },

      price: {
        type: Sequelize.FLOAT,
      },

      yourChoices: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Room_Type");
  },
};
