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
const getHotels = async () => {
  try {
    const hotels = await db.Hotel.find({

    }).limit(req.query.limit);

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
      EM: "something wrong with service Hotel",
      EC: 1,
      DT: [],
    };
  }
};





module.exports = {
    getAllHotel,
    getHotels,
};
