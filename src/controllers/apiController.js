import { createUserService } from '../services/loginRegisterServices';
let postRegisterUser = async (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing required parameters', //error message
                EC: '1',
                DT: '',
            });
        }
        if (req.body.password && req.body.password < 4) {
            return res.status(200).json({
                EM: 'Your password must have more than 3 letters', //error message
                EC: '1',
                DT: '',
            });
        }
        let data = await createUserService(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: '',
        });
    } catch (error) {
        return res.status(500).json({
            EM: 'error from server ',
            EC: '-1',
            DT: '',
        });
    }
};
module.exports = {
    postRegisterUser,
};
