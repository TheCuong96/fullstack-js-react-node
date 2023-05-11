import express from 'express';
import { postRegisterUser, postLoginUser } from '../controllers/apiController';

import { readFunc, deleteFunc } from '../controllers/apiUserController';
let router = express.Router();

const initApiRoute = (app) => {
    router.get('/user/read', readFunc);
    // router.post('/user/create', readFunc);
    // router.put('/user/update', readFunc);
    router.delete('/user/delete', deleteFunc);

    router.post('/login', postLoginUser);
    router.post('/register', postRegisterUser);
    return app.use('/api/v1', router);
};

export default initApiRoute;
