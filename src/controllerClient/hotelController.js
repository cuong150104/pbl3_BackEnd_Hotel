import hotelApiService from "../serviceClient/hotelApiService";


const readFuncHotelLove = async (req, res) => {
  try {

    let data = await hotelApiService.getAllHotel();
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


const readHotels = async (req, res) => {
  try {
    let data = await hotelApiService.getHotels();
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




const readHotelId = async(req, res) => {
  let id = req.params.id;
  try {
    let data = await hotelApiService.getHotelId(id);
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
  readFuncHotelLove,
  readHotels,
  readHotelId,
};
