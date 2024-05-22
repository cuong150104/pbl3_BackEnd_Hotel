import db from "../../models/index";

const getRoomTypeByHotel = async (id) => {
  try {
    if (!id) {
      return {
        EM: "Not found any roles",
        EC: 0,
        DT: [],
      };
    }

    let RoomType = await db.Room_Type.findAll({
      where: { hotelId: id },
      attributes: [
        "id",
        "type_name",
        "room_image",
        "countRoom",
        "hotelId",
        "max_people",
        "price",
        "yourChoices",
      ],
    });
    return {
      EM: "Get Role by group succeeds...",
      EC: 0,
      DT: RoomType,
    };
  } catch (error) {
    console.log(error);
    return { EM: "something wrong with service   sẻvice", EC: 1, DT: [] };
  }
};

const getRoomTypes = async () => {
  try {
    const data = await db.Room_Type.findAll({
      attributes: [
        "id",
        "type_name",
        "room_image",
        "countRoom",
        "hotelId",
        "max_people",
        "price",
        "yourChoices",
      ],
    });

    return {
      EM: "Get room type successfully",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return { EM: "Internal server error", EC: 1, DT: [] };
  }
};

module.exports = {
  getRoomTypeByHotel,
  getRoomTypes,
};