// import connection from "../configs/connectDB";
import bcrypt from "bcrypt";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

import db from "../models";
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (passwordUser) => {
    return bcrypt.hashSync(passwordUser, salt);
};

const createUserService = async (data) => {
    let hashPass = hashUserPassword(data.password);
    try {
        await db.User.create({
            ...data,
            password: hashPass,
        });
    } catch (error) {
        console.log("error", error);
    }
};

const getListUserService = async () => {
    try {
        const listData = await db.User.findAll();
        return listData;
    } catch (error) {
        console.log("error", error);
    }
};

const deleteUserService = async (userId) => {
    try {
        db.User.destroy({
            where: { id: userId },
        });
    } catch (error) {
        console.log("error", error);
    }
};

const getOneUserService = async (id) => {
    try {
        let user = {};
        user = await db.User.findOne({
            where: { id: id },
        });
        return user.get({ plain: true }); //plain: true để xử lý data trả về
    } catch (error) {
        console.log("error", error);
    }
};

const postSubmitEditUserService = async (data) => {
    console.log("data", data);
    const { id, ...restData } = data;
    try {
        return await db.User.update(
            {
                ...restData,
            },
            {
                where: { id: id },
            }
        );
    } catch (error) {
        console.log("error", error);
    }
};
module.exports = {
    createUserService,
    getListUserService,
    deleteUserService,
    getOneUserService,
    postSubmitEditUserService,
};
