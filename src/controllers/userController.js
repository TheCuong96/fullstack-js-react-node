import {
    createUserService,
    getListUserService,
} from "../services/userServices";

let getFormUser = async (req, res) => {
    let userList = await getListUserService();
    console.log("userList", userList);
    return res.render("user.ejs", { userList });
};
let postSubmitCreateUser = (req, res) => {
    createUserService(req.body);
    return res.redirect("/create-user");
};

let getUserList = async (req, res) => {
    let userList = await getListUserService();
    console.log("userList", userList);
    return res.render("user.ejs", { userList });
};

module.exports = {
    getFormUser,
    postSubmitCreateUser,
    getUserList,
};
