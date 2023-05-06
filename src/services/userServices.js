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
        // const listData = await db.User.findAll();
        const listData = await db.User.findOne({
            // hàm này lấy info user thông qua id, và lấy thông tin Group của chính user đang có
            where: { id: 1 }, // truyền id để lấy data
            attributes: ["id", "username", "email"], // thằng này tồn tại sẽ trả về các thuộc tính mà ta muốn, nếu không thì nó sẽ trả ra rất nhiều data phụ
            raw: true, // compiler data trả về thành object js
            include: [{ model: db.Group, attributes: ["name", "description"] }],
            nest: true, // compiler data trả về thành object js cho các table con
        });

        const role = await db.Role.findAll({
            // hàm này lấy tất cả Group id = 1 có trong table role
            include: { model: db.Group, where: { id: 1 } },
            raw: true, // compiler data trả về thành object js
            nest: true, // compiler data trả về thành object js cho các table con
        });
        console.log("listData", listData);
        console.log("role", role);
        // return listData;
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
