import db from "../../models/index";
import { sendEmailService } from "../emailService";
const createNewReservation = async (data) => {
  try {
    await db.Reservation.create({ ...data });
    // console.log(">>check data reservation: ", data);
    return {
      EM: "CREATE Ok!",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "something w999rong with service  reservation",
      EC: 1,
      DT: [],
    };
  }
};

const getMaxIdReservation = async () => {
  try {
    // Sử dụng Sequelize để thực hiện câu truy vấn SQL để lấy giá trị tối đa của id trong bảng Reservation
    const maxIdReservation = await db.Reservation.max("id");

    // Kiểm tra xem giá trị maxIdReservation có tồn tại không
    if (maxIdReservation !== null) {
      return {
        EM: "Get max id reservation success",
        EC: 0,
        DT: maxIdReservation,
      };
    } else {
      return {
        EM: "No reservations found",
        EC: 0,
        DT: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Something went wrong with getting max id reservation",
      EC: 1,
      DT: null,
    };
  }
};

const bookingMessage = async (data) => {
  try {
    let sendEmail = await sendEmailService(
      data.email,
      data.name,
      data.phoneNumber,
      data.address,
      data.startDate,
      data.endDate,
  
    );

    if (sendEmail) {
      return {
        EM: "reject success",
        EC: 0,
        DT: sendEmail,
      };
    } else {
      return {
        EM: "reject unsuccess",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "something wrong with service",
      EC: 1,
      DT: [],
    };
  }
};

const getListBookings = async (page, limit) => {
  try {
    const offset = (page - 1) * limit;
    const { count, rows } = await db.Reservation.findAndCountAll({
      offset: offset,
      limit: limit,
      include: [
        {
          model: db.Hotel,
          attributes: ["name", "description", "id"],
          as: "hotel",
        },
        {
          model: db.User,
          attributes: ["username", "phone"],
          as: "user",
        },
      ],
      order: [["id", "DESC"]],
    });

    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      bookings: rows,
    };

    return {
      EM: "Success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return {
      EM: "Something error",
      EC: 1,
    };
  }
};

const getDetailBooking = async (bookingId, page, limit) => {
  try {
    const offset = (page - 1) * limit;
    const { count, rows } = await db.Reservation_Detail.findAndCountAll({
      offset: offset,
      limit: limit,
      where: {
        reservationId: bookingId,
      },
      include: [
        {
          model: db.Room,
          as: "room",
        },
        {
          model: db.Reservation,
          as: "booking",
          include: {
            model: db.Hotel,
            as: "hotel",
          },
        },
      ],
      order: [["id", "ASC"]],
    });

    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      data: rows,
    };

    return {
      EM: "Success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return {
      EM: "Something error",
      EC: 1,
    };
  }
};

const updateStatus = async (bookingId, reservationStatus) => {
  try {
    const booking = await db.Reservation.findOne({
      where: { id: bookingId },
    });

    if (booking) {
      await booking.update({
        reservationStatus,
      });
      return {
        EM: "Update booking status successfully",
        EC: 0,
        DT: "",
      };
    } else {
      return {
        EM: "Booking not found",
        EC: 2,
        DT: "",
      };
    }
  } catch (error) {
    return { EM: "Internal server error", EC: 1, DT: [] };
  }
};

module.exports = {
  createNewReservation,
  getMaxIdReservation,
  bookingMessage,
  getListBookings,
  getDetailBooking,
  updateStatus,
};