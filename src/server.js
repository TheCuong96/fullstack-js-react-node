import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;

//2 thằng dưới đây dùng để compile code lại code js mà ta có thể hiểu và sử dụng được ở node mỗi khi có data được bắn qua lại giữa server và client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

// init api route

//init web route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
