
import db from "../models/index";

const getHotelWithPagination = async (page, limit) => {
    try {
      let offset = (page - 1) * limit;
      const { count, rows } = await db.Hotel.findAndCountAll({
        offset: offset,
        limit: limit,
        attributes: ["id", "category", "name", "city", "address", "description",
                      "phone", "country", "photos","distance", "rating","type"],
        // include: { model: db.Group, attributes: ["name", "description", "id"] },
        order: [["id", "ASC"]],
      });
  
      let totalPages = Math.ceil(count / limit);
      let data = {
        totalRows: count,
        totalPages: totalPages,
        hotels: rows,
      };
      
      return {
        EM: "FETCH Ok!",
        EC: 0,
        DT: data,
      };
    } catch (error) {
      console.log(error);
      return {
        EM: "somthing wrong with service",
        EC: 1,
        DT: [],
      };
    }
  };

  const createNewHotel = async (data) => {
    try {
      const photosJSON = JSON.stringify(data.photos);
      const cleanPhotosJSON = photosJSON.slice(1, -1);
      const photosArray = [cleanPhotosJSON]
      console.log(photosArray);
      // create new user

      await db.Hotel.create({ ...data , photos: photosArray});
      console.log(">>check data hotel: ", data);
      return {
        EM: "CREATE Ok!",
        EC: 0,
        DT: [],
      };
    } catch (error) {
      console.log(error);
      return { EM: "something wrong with service ", EC: 1, DT: [] };
    }
  };
  const deleteHotel = async (id) => {
    try {
      let hotel = await db.Hotel.findOne({
        where: { id: id },
      });
      if (hotel) {
        await hotel.destroy();
  
        return {
          EM: "DELETE user success",
          EC: 0,
          DT: [],
        };
      } else {
        return {
          EM: "user not exist",
          EC: 2,
          DT: [],
        };
      }
    } catch (error) {
      console.log(error);
      return {
        EM: "error from service",
        EC: 1,
        DT: [],
      };
    }
  };
module.exports = {
    getHotelWithPagination,
    createNewHotel,
    deleteHotel,

};
