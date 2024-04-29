import hotelApiService from "../service/hotelApiService";

const readFunc = async (req, res) => {
    try {
      if (req.query.page && req.query.limit) {
        let page = req.query.page;
        let limit = req.query.limit;

        let data = await hotelApiService.getHotelWithPagination(+page, +limit);
        return res.status(200).json({
          EM: data.EM, // error message
          EC: data.EC, // error code
          DT: data.DT, //data
        });
      } else {
        let data = await userApiService.getAllUsers();
        return res.status(200).json({
          EM: data.EM, // error message
          EC: data.EC, // error code
          DT: data.DT, //data
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        EM: "error from server", // error message
        EC: "-1", // error code
        DT: "", //data
      });
    }
  };

  const createFunc = async (req, res) => {
    try {
      let data = await hotelApiService.createNewHotel(req.body);
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
  
  const deleteFunc = async (req, res) => {
    try {
      let data = await hotelApiService.deleteHotel(req.body.id);
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
module.exports = {
    readFunc,
    createFunc,
    deleteFunc,
};
