const db = require("../models");
const sequelize = db.sequelize;

/**
 * type: Get statistic by date (DAY) - month (MONTH) - quarter (QUARTER) - year (YEAR)
 * **/
const getStatistics = async (type = 0) => {
  try {
    let queryObj;
    
    switch (type) {
      case "DAY": {
        queryObj = {
          attributes: [
            [sequelize.fn("DATE", sequelize.col("createdAt")), "day"],
            [sequelize.fn("SUM", sequelize.col("totalPrice")), "totalRevenue"],
            ],
            group: [sequelize.fn("DATE", sequelize.col("createdAt"))],
            };
            console.log(">>check danh thu",queryObj);
            break;
            }

      case "MONTH": {
        queryObj = {
          attributes: [
            [
              sequelize.fn("DATE_FORMAT", sequelize.col("createdAt"), "%Y-%m"),
              "month",
            ],
            [sequelize.fn("SUM", sequelize.col("totalPrice")), "totalRevenue"],
          ],
          group: [
            sequelize.fn("DATE_FORMAT", sequelize.col("createdAt"), "%Y-%m"),
          ],
        };
        break;
      }

      case "QUARTER": {
        queryObj = {
          attributes: [
            [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
            [sequelize.literal("QUARTER(createdAt)"), "quarter"],
            [sequelize.fn("SUM", sequelize.col("totalPrice")), "totalRevenue"],
          ],
          group: [
            [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
            [sequelize.literal("QUARTER(createdAt)"), "quarter"],
          ],
        };
        break;
      }

      case "YEAR": {
        queryObj = {
          attributes: [
            [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
            [sequelize.fn("SUM", sequelize.col("totalPrice")), "totalRevenue"],
          ],
          group: [sequelize.fn("YEAR", sequelize.col("createdAt"))],
        };
      }
    }

    const data = await db.Reservation.findAll({
      where: {
        reservationStatus: 2,
      },
      ...queryObj,
      raw: true,
    });

    return {
      EM: "Get statistic successfully",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return { EM: "Internal server error", EC: 1, DT: [] };
  }
};

const getTopBookingRooms = async () => {
  try {
    const rooms = await db.Reservation_Detail.findAll({
      attributes: [
        "roomId",
        [sequelize.fn("COUNT", sequelize.col("roomId")), "totalBooking"],
      ],
      include: [
        {
          model: db.Reservation,
          where: { reservationStatus: 2 },
          attributes: [],
          as: "booking",
        },
      ],
      group: ["roomId"],
      order: [[sequelize.literal("totalBooking"), "DESC"]],
      raw: true,
    });

    const roomIds = rooms.map((it) => it.roomId);

    const roomDetails = await db.Room.findAll({
      where: {
        id: roomIds,
      },
      attributes: ["id", "title"],
      raw: true,
    });

    const result = rooms.map((room) => {
      const roomDetail = roomDetails.find((it) => it.id === room.roomId);
      return {
        roomId: room.roomId,
        roomName: roomDetail.title,
        totalBooking: room.totalBooking,
      };
    });

    return {
      EM: "Get top bookings room successfully",
      EC: 0,
      DT: result,
    };
  } catch (error) {
    return { EM: "Internal server error", EC: 1, DT: [] };
  }
};

module.exports = { getStatistics, getTopBookingRooms };