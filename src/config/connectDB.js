import mysql from "mysql2"; // sử dụng mysql2/promise để có thể lấy createPool
// // create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "fullstack",
});
export default connection;
