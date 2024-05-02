import hotelApiService from "../service/hotelApiService";

import reservationApiService from "../serviceClient/reservationApiService";
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

 
module.exports = {
  
    createFunc,
    
};
