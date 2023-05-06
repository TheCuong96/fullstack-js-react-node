import {
    createUserService,
    getListUserService,
    deleteUserService,
    getEditUserService,
    postSubmitEditUserService,
} from "../services/userServices";

let getFormUser = async (req, res) => {
    let userList = await getListUserService();
    return res.render("user.ejs", { userList });
};
let postSubmitCreateUser = async (req, res) => {
    await createUserService(req.body);
    return res.redirect("/create-user");
};
let getUserList = async (req, res) => {
    let userList = await getListUserService();
    return res.render("user.ejs", { userList });
};
let deleteUser = async (req, res) => {
    let userList = await deleteUserService(req.body.userId);
    return res.redirect("/create-user");
};

let getEditUser = async (req, res) => {
    console.log("req", req.params);
    // lấy data cần edit từ server bằng id
    let userList = await getEditUserService(req.params.id);
    return res.render("edit-user.ejs", { dataUser: userList });
};

let postSubmitUpdate = async (req, res) => {
    console.log("req", req.body);
    // lấy data cần edit từ server bằng id
    let userList = await postSubmitEditUserService(req.body);
    return res.redirect("/create-user");
};
module.exports = {
    getFormUser,
    postSubmitCreateUser,
    getUserList,
    deleteUser,
    getEditUser,
    postSubmitUpdate,
};
