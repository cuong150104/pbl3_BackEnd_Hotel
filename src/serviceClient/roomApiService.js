import db from "../models/index";



const getRoomId = async (id) =>{
  try {
  
   // let room = await db.Room.findByPk(id);
    let room = await db.Room.findAll({
      where: {
        hotelId: id // hotelId là biến chứa giá trị của hotelId bạn muốn tìm
      }
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



  

module.exports = {
    getRoomId,
    
};
