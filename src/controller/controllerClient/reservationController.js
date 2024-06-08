import hotelApiService from "../../service/serviceClient/hotelApiService";

import reservationApiService from "../../service/serviceClient/reservationApiService";
const createFunc = async (req, res) => {
  try {
    let data = await reservationApiService.createNewReservation(req.body);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
}

const getMaxIdReservation = async (req, res) => {
  try {
    let data = await reservationApiService.getMaxIdReservation();
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
}


const bookingMessage = async (req, res) => {
  try {
    let data = await reservationApiService.bookingMessage(req.body);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};


const getListBooking = async (req, res) => {
  try {
    const page = req.query?.page || 1;
    const limit = req.query?.limit || 4;

    const data = await reservationApiService.getListBookings(page, limit);

    res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    res.status(500).json({
      EM: "Internal server error",
      EC: "-1",
    });
  }
};

const getDetailBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const page = req.query?.page || 1;
    const limit = req.query?.limit || 4;

    const data = await reservationApiService.getDetailBooking(
      bookingId,
      page,
      limit
    );

    res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    res.status(500).json({
      EM: "Internal server error",
      EC: "-1",
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { status } = req.body;

    const data = await reservationApiService.updateStatus(bookingId, status);

    res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    res.status(500).json({
      EM: "Internal server error",
      EC: "-1",
      DT: "",
    });
  }
};

module.exports = {

  createFunc,
  getMaxIdReservation,
  bookingMessage,
  getListBooking,
  getDetailBooking,
  updateStatus,

};
