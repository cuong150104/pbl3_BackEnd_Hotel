import db from "../../models/index";

const createNewReservation_detail = async (data) => {
  try {

    await db.Reservation_Detail.create({ ...data });
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



module.exports = {
    createNewReservation_detail,

};