import mysql from "mysql2"; // sử dụng mysql2/promise để có thể lấy createPool
// // create the connection to database
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "fullstack",
// });
// export default connection;

const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("fullstack", "root", null, {
    host: "localhost",
    dialect: "mysql",
});
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
export default connection;
