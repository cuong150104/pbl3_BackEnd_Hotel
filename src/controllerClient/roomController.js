import roomApiService from "../serviceClient/roomApiService";


const readRoomId = async(req, res) => {
  let id = req.params.id;
  
  try {
    let data = await roomApiService.getRoomId(id);
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: data.DT, //data
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
}

module.exports = {
 
    readRoomId,
};
