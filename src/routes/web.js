import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get("/list-user", homeController.getUserList);
    router.post("/create-user-submit", homeController.postSubmitCreateUser);
    router.get("/create-user", homeController.getFormUser);
    router.get("/", homeController.getHome);
    return app.use("/", router);
};

export default initWebRoute;
