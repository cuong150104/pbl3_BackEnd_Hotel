import hotelApiService from "../service/hotelApiService";
import roomApiService from "../service/roomApiService";

const readFunc = async (req, res) => {
  const isCustomer = req?.user?.groupWithRoles?.id === 3;
  const accountId = req?.user?.userId;
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;

      let data = await hotelApiService.getHotelWithPagination(
        +page,
        +limit,
        isCustomer ? accountId : null
      );
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
};

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

const getRoomsByHotelId = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const page = req.query?.page || 1;
    const limit = req.query?.limit || 4;

    const data = await roomApiService.getRoomsByHotelId(hotelId, page, limit);

    res.json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    res.status(500).json({
      EM: "Internal server error",
    });
  }
};

module.exports = {
  readFunc,
  createFunc,
  deleteFunc,
  getRoomsByHotelId,
};