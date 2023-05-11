import db from '../models';

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

const deleteUserService = async (userId) => {
    try {
        db.User.destroy({
            where: { id: userId },
        });
    } catch (error) {
        console.log('error', error);
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
module.exports = {
    getAllUserService,
    deleteUserService,
    getOneUserService,
    postSubmitEditUserService,
};
