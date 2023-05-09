// import connection from "../configs/connectDB";
import bcrypt from 'bcrypt';

import db from '../models';
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (passwordUser) => {
    return bcrypt.hashSync(passwordUser, salt);
};

const checkFormUser = async (infoUser) => {
    let user = await db.User.findOne({ where: infoUser });
    if (user) {
        return true;
    }
    return false;
};

const createUserService = async (data) => {
    try {
        if (await checkFormUser({ email: data.email })) {
            return {
                EM: 'The Email is already exist',
                EC: 1,
            };
        }
        if (await checkFormUser({ phone: data.phone })) {
            return {
                EM: 'The Phone number is already exist',
                EC: 1,
            };
        }
        let hashPass = hashUserPassword(data.password);
        await db.User.create({
            ...data,
            password: hashPass,
        });
        return {
            EM: 'A user is created successfully',
            EC: 0,
        };
    } catch (error) {
        console.log('error', error);
        return {
            EM: 'Somthing wrongs in service...',
            EC: -2,
        };
    }
};

module.exports = {
    createUserService,
};
