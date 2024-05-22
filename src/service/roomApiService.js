import db from "../models/index";

const getRoomlWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.Hotel.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: [
        "id",
        "title",
        "price",
        "max_people",
        "description",
        "roomNumbers",
        "hotelId",
      ],
      include: {
        model: db.Hotel,
        attributes: ["name", "description", "id"],
        as: "hotel",
      },
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

const getRoomsByHotelId = async (hotelId, page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.Room.findAndCountAll({
      where: {
        hotelId,
      },
      offset: offset,
      limit: limit,
      attributes: [
        "id",
        "title",
        "price",
        "max_people",
        "description",
        "roomNumbers",
        "hotelId",
        "roomStatus",
        "roomTypeId",
      ],
      include: [
        {
          model: db.Hotel,
          attributes: ["name", "description", "id"],
          as: "hotel",
        },
        {
          model: db.Room_Type,
          attributes: ["type_name", "id"],
          as: "roomType",
        },
      ],
      order: [["id", "ASC"]],
    });

    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      rooms: rows,
    };

    return {
      EM: "FETCH Ok!",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return {
      EM: "Internal server error",
      EC: 1,
      DT: [],
    };
  }
};

const createRoom = async (data) => {
  try {
    await db.Room.create(data);

    return {
      EM: "CREATE Ok!",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    return { EM: "Internal server error", EC: 1, DT: [] };
  }
};

const getRoomById = async (roomId) => {
  try {
    const data = await db.Room.findOne({
      where: {
        id: roomId,
      },
      include: [
        {
          model: db.Hotel,
          attributes: ["name", "description", "id"],
          as: "hotel",
        },
        {
          model: db.Room_Type,
          attributes: ["type_name", "id"],
          as: "roomType",
        },
      ],
    });

    if (data) {
      return {
        EM: "Get room successfully",
        EC: 0,
        DT: data,
      };
    } else {
      return {
        EM: "Room not found",
        EC: 0,
        DT: null,
      };
    }
  } catch (error) {
    return { EM: "Internal server error", EC: 1, DT: [] };
  }
};

const updateRoom = async (roomId, data) => {
  try {
    const room = await db.Room.findOne({
      where: { id: roomId },
    });

    if (room) {
      await room.update(data);
      return {
        EM: "Update room successfully",
        EC: 0,
        DT: "",
      };
    } else {
      return {
        EM: "Room not found",
        EC: 2,
        DT: "",
      };
    }
  } catch (error) {
    return { EM: "Internal server error", EC: 1, DT: [] };
  }
};

const deleteRoom = async (id) => {
  try {
    const room = await db.Room.findOne({
      where: { id },
    });
    if (room) {
      await room.destroy();
    }
    return {
      EM: "Delete room successfully",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return { EM: "Internal server error", EC: 1, DT: [] };
  }
};

module.exports = {
  getRoomlWithPagination,
  getRoomsByHotelId,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
};