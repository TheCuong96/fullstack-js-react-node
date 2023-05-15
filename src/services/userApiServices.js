import db from '../models';
import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (passwordUser) => {
    return bcrypt.hashSync(passwordUser, salt);
};

const checkFormUser = async (infoUser) => {
    let user = await db.User.findOne({ where: infoUser });
    console.log('checkFormUser', user);
    if (user) {
        return true;
    }
    return false;
};

const getAllUserService = async () => {
    try {
        const listUser = await db.User.findAll({
            attributes: ['id', 'username', 'email', 'phone', 'sex'],
            include: { model: db.Group, attributes: ['name', 'description'] },
        });
        if (listUser) {
            return {
                EM: 'get data success',
                EC: 0,
                DT: listUser,
            };
        } else {
            return {
                EM: 'get data success',
                EC: 0,
                DT: [],
            };
        }
    } catch (error) {
        console.log('error', error);
        return {
            EM: 'something wrongs with servies 123',
            EC: 1,
            DT: [],
        };
    }
};
const getUserWithPagiService = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ['id', 'username', 'email', 'phone', 'sex', 'address'],
            include: {
                model: db.Group,
                attributes: ['name', 'description', 'id'],
            },
            order: [['id', 'DESC']], // sấp xếp Id từ dưới đếm lên
        });
        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRous: count,
            totalPages: totalPages,
            user: rows,
        };
        return {
            EM: 'fetch ok',
            EC: 0,
            DT: data,
        };
    } catch (error) {
        console.log('error', error);
        return {
            EM: 'something wrongs with servies',
            EC: 1,
            DT: [],
        };
    }
};
const deleteUserService = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id },
        });
        if (user) {
            user.destroy();
            return {
                EM: 'Delete user success',
                EC: 0,
                DT: [],
            };
        } else {
            return {
                EM: 'User not exist',
                EC: 2,
                DT: [],
            };
        }
    } catch (error) {
        console.log('error', error);
        return {
            EM: 'serror from servies',
            EC: 1,
            DT: [],
        };
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
        console.log('error', error);
    }
};

const postSubmitEditUserService = async (data) => {
    console.log('data', data);
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
        console.log('error', error);
    }
};

const createNewUserService = async (data) => {
    try {
        if (await checkFormUser({ email: data.email })) {
            // Kiểm tra email có tồn tại hay không, nếu không thì mới cho tạo
            return {
                EM: 'The Email is already exist',
                EC: 1,
                DT: 'email',
            };
        }
        if (await checkFormUser({ phone: data.phone })) {
            // Kiểm tra phone có tồn tại hay không, nếu không thì mới cho tạo
            return {
                EM: 'The Phone number is already exist',
                EC: 1,
                DT: 'phone',
            };
        }
        let hashPass = hashUserPassword(data.password);
        await db.User.create({
            ...data,
            password: hashPass,
        });
        return {
            EM: 'create ok',
            EC: 0,
            DT: [],
        };
    } catch (error) {
        console.log('error', error);
    }
};

const updateUserService = async (data) => {
    try {
        if (!data.groupId) {
            // nếu không có groupId thì không cho update và out khỏi hàm
            return {
                EM: 'Error with empty GroupId',
                EC: 1,
                DT: 'group',
            };
        }
        const user = await db.User.findOne({
            // kiểm tra user có trong db hay không, nếu có thì mới update
            where: { id: data.id },
        });
        if (user) {
            await user.update({
                // những thằng dưới đây mới được update
                username: data.username,
                address: data.address,
                sex: data.sex,
                groupId: data.groupId,
            });
            return {
                EM: 'Update user succeeds',
                EC: 0,
                DT: '',
            };
        } else {
            return {
                EM: 'User not found',
                EC: 2,
                DT: '',
            };
        }
    } catch (error) {
        console.log('error', error);
        return {
            EM: 'something wrongs with servies',
            EC: 1,
            DT: [],
        };
    }
};
module.exports = {
    getAllUserService,
    deleteUserService,
    getOneUserService,
    postSubmitEditUserService,
    getUserWithPagiService,
    createNewUserService,
    updateUserService,
};
