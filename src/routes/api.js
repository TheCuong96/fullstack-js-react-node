import express from 'express';
import { postRegisterUser } from '../controllers/apiController';
let router = express.Router();

const initApiRoute = (app) => {
    router.post('/register', postRegisterUser);
    return app.use('/api/v1', router);
};

export default initApiRoute;
