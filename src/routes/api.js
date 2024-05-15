import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import roleController from "../controller/roleController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";
import hotelController from "../controller/hotelController";
import hotelControllerClinet from "../controller/controllerClient/hotelController";
import reservationController from "../controller/controllerClient/reservationController";
import roomTypeController from "../controller/controllerClient/roomTypeController";
import roomController from "../controller/controllerClient/roomController";
import reservation_detailController from "../controller/controllerClient/reservation_detailController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

// const testMiddleware = (req, res, next) => {
//   console.log("calling a middleware");
//   if (true) {
//     return res.send("reject middleware");
//   }
//   next();
// };

const initApiRoutes = (app) => {
  // path, handle
  // rest API
  // GET - R, POST - C, PUT - U, DELETE - D

  router.all(/^\/(?!hotel).*/, checkUserJWT, checkUserPermission);

  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);
  router.post("/logout", apiController.handleLogout);

  router.get("/account", userController.getUserAccount);

  // user routes
  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  // roles routes
  router.get("/role/read", roleController.readFunc);
  router.post("/role/create", roleController.createFunc);
  router.put("/role/update", roleController.updateFunc);
  router.delete("/role/delete", roleController.deleteFunc);
  router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
  router.post("/role/assign-to-group", roleController.assignRoleToGroup);


  // group routes
  router.get("/group/read", groupController.readFunc);

  //hotel routes
  router.get("/hotelAdmin/read", hotelController.readFunc);
  router.post("/hotel/create", hotelController.createFunc);
  router.delete("/hotel/delete", hotelController.deleteFunc);
 
    //reservation
  router.post("/reservation/create", reservationController.createFunc);



  /////////////////// client

  router.get("/hotel/room_type/by-hotel/:hotelId",roomTypeController.getRoomTypeByHotel);
  router.get("/hotel/room/by-roomType/:roomTypeId",roomController.getRoom_By_RoomType);
  router.get("/hotel/countByCity",hotelControllerClinet.countByCity );
  router.get("/hotel/HoteslWithCityTilte",hotelControllerClinet.getHoteslWithCityTilte );
  router.get("/hotel/maxIdReservation",reservationController.getMaxIdReservation );
  

  ///check quyen 
  router.post("/hotel/reservation_detail/create",reservation_detailController.createFunc );

  return app.use("/api/v1/", router);
};

export default initApiRoutes;
