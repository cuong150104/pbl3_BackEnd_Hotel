"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Reservation", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      hotelId: {
        type: Sequelize.INTEGER,
      },
      roomCount:  {
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        type: Sequelize.FLOAT,
      },
     
     
      reservationStatus: {// trạng thái đặt chỗ
        type: Sequelize.STRING,
      },
      discountPercent: {// giảm giá
        type: Sequelize.FLOAT,
      },
      description: {
        type: Sequelize.STRING,
      },
      isPayment: {
        type: Sequelize.STRING,
      },

      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      reservationDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Reservation");
  },
};
