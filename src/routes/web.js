import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get("/create-user", homeController.getUser);
    router.get("/", homeController.getHome);
    return app.use("/", router);
};

export default initWebRoute;
