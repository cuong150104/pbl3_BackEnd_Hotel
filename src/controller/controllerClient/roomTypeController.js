import roomTypeService from "../../service/serviceClient/roomTypeApiService";

const getRoomTypeByHotel = async (req, res) => {
  try {
    let hotelId = req.params.hotelId;
    let data = await roomTypeService.getRoomTypeByHotel(hotelId);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server huhuh", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};

const getRoomTypes = async (req, res) => {
  try {
    const data = await roomTypeService.getRoomTypes();

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
  getRoomTypeByHotel,
  getRoomTypes,
};