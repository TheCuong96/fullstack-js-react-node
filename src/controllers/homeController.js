console.log("Creating connection pool...");

let getHome = async (req, res) => {
    return res.render("home");
};
let getUser = async (req, res) => {
    return res.render("create-user.ejs");
};
module.exports = {
    getHome,
    getUser,
};
