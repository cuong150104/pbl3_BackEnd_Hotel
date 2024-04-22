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
      EM: "something wrong with service Hotel",
      EC: 1,
      DT: [],
    };
  }
};

const getHotelId = async (id) =>{
  try {
  
    let hotel = await db.Hotel.findByPk(id);
    if (hotel) {
      return {
        EM: "get data success Hotel",
        EC: 0,
        DT: hotel,
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
}




module.exports = {
    getAllHotel,
    getHotels,
    getHotelId,
    
};
