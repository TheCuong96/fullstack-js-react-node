// import connection from "../configs/connectDB";
import bcrypt from "bcrypt";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (passwordUser) => {
    return bcrypt.hashSync(passwordUser, salt);
};

const createUserService = async (data) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack",
        Promise: bluebird,
    });
    let hashPass = hashUserPassword(data.password);
    try {
        const [rows, fields] = await connection.execute(
            "insert into users(email, username, password) values (?, ?, ?)",
            [data.email, data.username, hashPass]
        );
        return rows;
    } catch (error) {
        console.log("error", error);
    }
    // connection.query(
    //     "insert into users(email, username, password) values (?, ?, ?)",
    //     [data.email, data.username, hashPass],
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log("err", err);
    //         }
    //     }
    // );
};

const getListUserService = async () => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack",
        Promise: bluebird,
    });
    let users = [];
    // connection.query("Select * from users", function (err, results, fields) {
    //     if (err) {
    //         console.log("err", err);
    //     }
    //     console.log("check results", results);
    // });
    try {
        const [rows, fields] = await connection.execute("Select * from users");
        return rows;
    } catch (error) {
        console.log("error", error);
    }
};

const deleteUserService = async (userId) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack",
        Promise: bluebird,
    });
    try {
        await connection.execute("delete from users where id = ?", [userId]);
        return res.redirect("/");
    } catch (error) {
        console.log("error", error);
    }
};

const getEditUserService = async (id) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack",
        Promise: bluebird,
    });
    try {
        // lấy data cần edit từ server bằng id
        let [user] = await connection.execute(
            "Select * from users where id = ?",
            [id]
        );
        return user[0];
    } catch (error) {
        console.log("error", error);
    }
};

const postSubmitEditUserService = async (data) => {
    console.log("data", data);
    const { email, username, id } = data;
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack",
        Promise: bluebird,
    });
    try {
        return await connection.execute(
            "update users set  email = ? , username= ? where id = ?",
            [email, username, id]
        );
    } catch (error) {
        console.log("error", error);
    }
};
module.exports = {
    createUserService,
    getListUserService,
    deleteUserService,
    getEditUserService,
    postSubmitEditUserService,
};
