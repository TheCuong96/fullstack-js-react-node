import {
    createUserService,
    getListUserService,
} from "../services/userServices";

let getHome = async (req, res) => {
    return res.render("home");
};
let getFormUser = async (req, res) => {
    return res.render("create-user.ejs");
};
let postSubmitCreateUser = (req, res) => {
    createUserService(req.body);
    return res.redirect("/create-user");
};

let getUserList = () => {
    getListUserService();
    return res.redirect("/create-user");
};

module.exports = {
    getHome,
    getFormUser,
    postSubmitCreateUser,
    getUserList,
};
