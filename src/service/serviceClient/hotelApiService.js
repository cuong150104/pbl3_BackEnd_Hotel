const { Op, literal, where } = require("sequelize");
import db, { Sequelize, sequelize } from "../../models/index";
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
const getHotels = async (min, max, city, others) => {
  try {
  
    const options = {
      where: {
        ...others, // Include other criteria passed in the 'others' object
        city: {
          [db.Sequelize.Op.like]: `%${city}%` // Sử dụng LIKE thay vì ILIKE
        },
        cheapestPrice: {
          [db.Sequelize.Op.gt]: min || 1, // Default to 1 if min is falsy
          [db.Sequelize.Op.lt]: max || 999, // Default to 999 if max is falsy
        },
      },
   
    };
   console.log(">>chek where: ", options);
    // Query the Hotel model using Sequelize
    const hotels = await db.Hotel.findAll(options);


    // Execute the query
    // const hotels = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });

    // Check if hotels were found
    if (hotels && hotels.length > 0) {
      return {
        EM: "get data success Hotel",
        EC: 0,
        DT: hotels,
      };
    } else {
      // Return empty array if no hotels found
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



const getHotelId = async (id) => {
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



const countByCity = async (cities) => {
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return db.Hotel.count({ city: city });
      })
    );
  

    if (list) {
      return {
        EM: "get data success Hotel",
        EC: 0,
        DT: list,
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




// const getHoteslWithCityTilte = async (city) => {
//   try {
  
//     let hotelsQuery  = `SELECT * FROM hotel WHERE city = '${city}'`;


//     let hotelsData = await sequelize.query(hotelsQuery, {
//       type: Sequelize.QueryTypes.SELECT,
//   });

//     if (hotelsData) {
//       return {
//         EM: "get data success Hotel",
//         EC: 0,
//         DT: hotelsData,
//       };
//     } else {
//       return {
//         EM: "get data success Hotel",
//         EC: 0,
//         DT: [],
//       };
//     }
//   } catch (error) {
//     console.log(error);
//     return {
//       EM: "something wrong with service Hotel",
//       EC: 1,
//       DT: [],
//     };
//   }
// };


const getHoteslWithCity = async (hotelQuery) => {

  try{
    let whereCondition = {};
    if(hotelQuery.city)
      whereCondition.city = { [Op.like]: `%${hotelQuery.city}%`};
  }catch(error)
{

}
}

module.exports = {
  getAllHotel,
  getHotels,
  getHotelId,
  countByCity,
  getHoteslWithCity,

};
