import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
let router = express.Router();

const initWebRoute = (app) => {
    // router.delete("/delete-user", homeController.deleteUser);
    router.get("/list-user", userController.getUserList);
    router.post("/create-user-submit", userController.postSubmitCreateUser);
    router.get("/create-user", userController.getFormUser);

    router.get("/", homeController.getHome);
    return app.use("/", router);
};

export default initWebRoute;
