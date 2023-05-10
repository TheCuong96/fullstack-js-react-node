import express from 'express';
import { postRegisterUser, postLoginUser } from '../controllers/apiController';
let router = express.Router();

const initApiRoute = (app) => {
    router.post('/login', postLoginUser);
    router.post('/register', postRegisterUser);
    return app.use('/api/v1', router);
};

export default initApiRoute;
