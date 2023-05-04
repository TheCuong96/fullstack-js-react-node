import connection from "../configs/connectDB";

let getHome = async (req, res) => {
    return res.render("home");
};
let getFormUser = async (req, res) => {
    return res.render("create-user.ejs");
};
let postSubmitCreateUser = (req, res) => {
    let { email, username, password } = req.body;

    connection.query(
        "insert into users(email, username, password) values (?, ?, ?)",
        [email, username, password],
        function (err, results, fields) {
            if (err) {
                console.log("err", err);
            }
        }
    );

    return res.redirect("/create-user");
};

module.exports = {
    getHome,
    getFormUser,
    postSubmitCreateUser,
};
