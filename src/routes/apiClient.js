import express from "express";
import hotelController from "../controller/controllerClient/hotelController";
import roomController from "../controller/controllerClient/roomController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */


const initApiRoutesClient = (app) => {
  // path, handle
  // rest API
  // GET - R, POST - C, PUT - U, DELETE - D


  // router.all("*", checkUserJWT, checkUserPermission);
  //hotel routes
  router.get("/hotel/read", hotelController.readFuncHotelLove);
  router.get("/hotels/read", hotelController.readHotels);
  router.get("/hotels/find/:id", hotelController.readHotelId);
  //room routes
  router.get("/hotels/room/:id", roomController.readRoomId);

  //reservation routes
  router.get("/reservation/:id",);








  return app.use("/api/v1/", router);
};

export default initApiRoutesClient;
