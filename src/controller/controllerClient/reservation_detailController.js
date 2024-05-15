

import reservation_detailApiService from "../../service/serviceClient/reservation_detailApiService";
const createFunc = async (req, res) => {
  try {
    let data = await reservation_detailApiService.createNewReservation_detail(req.body);
    console.log(">> check new: ", req.body);
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





module.exports = {

  createFunc,

};
