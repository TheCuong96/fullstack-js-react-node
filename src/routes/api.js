import express from 'express';
import { postRegisterUser, postLoginUser } from '../controllers/apiController';

import {
    readFunc,
    deleteFunc,
    postCreateUserFunc,
    updateUserFunc,
} from '../controllers/apiUserController';

import { readGroup } from '../controllers/apiGroupController';
let router = express.Router();

const initApiRoute = (app) => {
    router.get('/group/read', readGroup);

    router.get('/user/read', readFunc);
    router.post('/user/create', postCreateUserFunc);
    router.put('/user/update', updateUserFunc);
    router.delete('/user/delete', deleteFunc);

    router.post('/login', postLoginUser);
    router.post('/register', postRegisterUser);
    return app.use('/api/v1', router);
};

export default initApiRoute;
