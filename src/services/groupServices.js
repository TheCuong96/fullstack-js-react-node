import db from '../models';

const getGroupService = async () => {
    try {
        const data = await db.Group.findAll({
            order: [['name', 'ASC']], // ở đây nghĩa là lấy data ra và dựa vào thuộc tính name để sấp xếp lại data theo thứ tự bảng chữ cái(ASC)
        });
        return {
            EM: 'Get group success',
            EC: 0,
            DT: data,
        };
    } catch (error) {
        console.log('error', error);
        return {
            EM: 'Error from servies',
            EC: 1,
            DT: [],
        };
    }
};
module.exports = {
    getGroupService,
};
