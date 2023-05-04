import {
    createUserService,
    getListUserService,
} from "../services/userServices";

let getHome = async (req, res) => {
    return res.render("home");
};
let getFormUser = async (req, res) => {
    let userList = await getListUserService();
    console.log("userList", userList);
    return res.render("create-user.ejs", { userList });
};
let postSubmitCreateUser = (req, res) => {
    createUserService(req.body);
    return res.redirect("/create-user");
};

let getUserList = async (req, res) => {
    let userList = await getListUserService();
    console.log("userList", userList);
    return res.render("create-user.ejs", { userList });
};

module.exports = {
    getHome,
    getFormUser,
    postSubmitCreateUser,
    getUserList,
};
