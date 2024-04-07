import db from "../models/index";

const getAllHotel = async () => {
  try {
    let hotels = await db.Hotel.findAll();
    if (hotels) {
      return {
        EM: "get data success Hotel",
        EC: 0,
        DT: hotels,
      };
    } else {
      return {
        EM: "get data success Hotel",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "somthing wrong with service Hotel",
      EC: 1,
      DT: [],
    };

  }
};


// const getHotelWithPagination = async (page, limit) => {


// }
module.exports = {
    getAllHotel,
};
