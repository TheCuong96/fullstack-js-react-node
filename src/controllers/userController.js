import {
    createUserService,
    getListUserService,
    deleteUserService,
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
let deleteUser = async (req, res) => {
    let userList = await deleteUserService(req.body.userId);
    console.log("userList", userList);
    return res.redirect("/create-user");
};
module.exports = {
    getFormUser,
    postSubmitCreateUser,
    getUserList,
    deleteUser,
};
