import {
    getAllUserService,
    handleUserLogin,
    getUserWithPagiService,
} from '../services/userApiServices';
let readFunc = async (req, res) => {
    try {
        const { page, limit } = req.query;
        console.log('page', page, limit);
        if (page && limit) {
            let data = await getUserWithPagiService(+page, +limit);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            });
        } else {
            let data = await getAllUserService();
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            });
        }
    } catch (error) {
        return res.status(500).json({
            EM: 'error from server ',
            EC: '-1',
            DT: '',
        });
    }
};

let postLoginUser = async (req, res) => {
    try {
        console.log('req', req.body);
        let data = await handleUserLogin(req.body);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: '',
        });
    }
};
module.exports = {
    readFunc,
    postLoginUser,
};
