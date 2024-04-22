
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

module.exports = {
    getHotelWithPagination,
};
