import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoute from './routes/web';
import initApiRoute from './routes/api';
require('dotenv').config();
import connection from './config/connectDB';
import cors from './config/cors';
const app = express();
const port = process.env.PORT || 8080;

//2 thằng dưới đây dùng để compile code lại code js mà ta có thể hiểu và sử dụng được ở node mỗi khi có data được bắn qua lại giữa server và client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

cors(app);
configViewEngine(app);
connection();
// init api route

//init web route
initWebRoute(app);
initApiRoute(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
