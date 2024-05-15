import db from "../../models/index";

const createNewReservation = async (data) => {
  try {

    await db.Reservation.create({ ...data });
    console.log(">>check data reservation: ", data);
    return {
      EM: "CREATE Ok!",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return { EM: "something w999rong with service  reservation", EC: 1, DT: [] };
  }
};

const getMaxIdReservation = async () => {
  try {
    // Sử dụng Sequelize để thực hiện câu truy vấn SQL để lấy giá trị tối đa của id trong bảng Reservation
    const maxIdReservation = await db.Reservation.max('id');

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


module.exports = {
  createNewReservation,
  getMaxIdReservation,

};