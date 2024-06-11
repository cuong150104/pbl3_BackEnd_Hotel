import db from "../../models/index";



const getRoomId = async (id) => {
  try {

    // let room = await db.Room.findByPk(id);
    let room = await db.Room.findAll({
      where: {
        hotelId: id
      },
      include: { model: db.Room_Type, as: 'roomType', attributes: ["type_name", "countRoom", "room_image"] },
    });

    if (room) {
      return {
        EM: "get data success Hotel",
        EC: 0,
        DT: room,
      };
    } else {
      return {
        EM: "get data success Hotel rong",
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

const getRoom_By_RoomType = async (id) => {
  try {
    const rooms = await db.Room.findAll({
      where: {
        roomTypeId: id
      },
      attributes: ["id", "title", "price", "max_people", "description", "roomNumbers", "hotelId", "roomTypeId", "roomStatus"],
    });

    const count = await db.Room.count({
      where: {
        roomTypeId: id
      }
    });

    if (rooms && rooms.length > 0) {
      return {
        EM: "Get data success",
        EC: 0,
        DT: {
          rooms: rooms,
          count: count
        }
      };
    } else {
      return {
        EM: "No rooms found for the specified room type",
        EC: 0,
        DT: {
          rooms: [],
          count: 0
        }
      };
    }
  } catch (error) {
    console.error(error);
    return {
      EM: "Something went wrong with the service",
      EC: 1,
      DT: {
        rooms: [],
        count: 0
      }
    };
  }
}





module.exports = {
  getRoomId,
  getRoom_By_RoomType,
 
};
