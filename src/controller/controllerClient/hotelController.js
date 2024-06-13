import hotelApiService from "../../service/serviceClient/hotelApiService";


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
  const { min, max, city, ...others} = req.query;
  try {

    let data = await hotelApiService.getHotels(min,max,city, others);
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



const countByCity = async (req, res) => {
  const cities = req.query.cities.split(",");
  // console.log("////check cities", cities)
  try {
    let data = await hotelApiService.countByCity(cities);
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

const getHoteslWithCityTilte = async (req, res) => {
  const cities = req.query.cities
  // console.log("////check cities", cities)
  try {
    let data = await hotelApiService.getHoteslWithCityTilte(cities);
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
 const getNameHotel_by_hotelId = async() =>
  {

  }



module.exports = {
  readFuncHotelLove,
  readHotels,
  readHotelId,
  countByCity,
  getHoteslWithCityTilte,
  getNameHotel_by_hotelId,
};
