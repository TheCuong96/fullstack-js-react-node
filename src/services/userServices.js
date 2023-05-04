import connection from "../configs/connectDB";
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (passwordUser) => {
    return bcrypt.hashSync(passwordUser, salt);
};

const createUserService = async (data) => {
    let hashPass = hashUserPassword(data.password);
    connection.query(
        "insert into users(email, username, password) values (?, ?, ?)",
        [data.email, data.username, hashPass],
        function (err, results, fields) {
            if (err) {
                console.log("err", err);
            }
        }
    );
};

const getListUserService = async () => {
    let users = [];
    connection.query("Select * from users", function (err, results, fields) {
        if (err) {
            console.log("err", err);
        }
        console.log("check results", results);
    });
};

module.exports = {
    createUserService,
    getListUserService,
};
