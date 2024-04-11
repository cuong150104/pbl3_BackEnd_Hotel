import express from "express";
import hotelController from "../controllerClient/hotelController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */


const initApiRoutesClient = (app) => {
  // path, handle
  // rest API
  // GET - R, POST - C, PUT - U, DELETE - D

  //hotel routes
  router.get("/hotel/read", hotelController.readFunc);

  router.get("/", hotelController.readHotels);

  return app.use("/api/v2/", router);
};

export default initApiRoutesClient;
