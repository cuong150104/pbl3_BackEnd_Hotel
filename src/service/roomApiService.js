
import db from "../models/index";

const getRoomlWithPagination = async (page, limit) => {
    try {
      let offset = (page - 1) * limit;
      const { count, rows } = await db.Hotel.findAndCountAll({
        offset: offset,
        limit: limit,
        attributes: ["id", "title", "price", "max_people", "description", "roomNumbers",
                      "hotelId"],
        include: { model: db.Hotel, attributes: ["name", "description", "id"] },
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
    getRoomlWithPagination,
};
