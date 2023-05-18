require('dotenv').config();
import jwt from 'jsonwebtoken';

const createJWT = () => {
    // đây là hàm mã hóa data khi nhận được từ user, nếu đúng là user ta muốn nhận thì mã hóa nó thành chuỗi string JWT, rồi gửi lại về cho user
    let payload = { name: 'CuongPhan', address: 'Ho Chi Minh' }; // lưu ý không nên lưu những thông tin nhạy cảm vào đây, vì thằng này rất dễ bị lấy và dịch ra
    let key = process.env.JWT_SECRET; // đây là key khi ta mã hóa data
    let token = null;
    try {
        token = jwt.sign(payload, key);
        console.log('token:', token);
    } catch (error) {
        console.log('error', error);
    }
    return token;
};

const verifyToken = (token) => {
    // đây là hàm dịch mã hóa ra data js mà ta đọc được khi nhận được từ user
    let key = process.env.JWT_SECRET;
    let data = null;
    try {
        let decoded = jwt.verify(token, key);
        data = decoded;
    } catch (error) {
        console.log('error', error);
    }
    return data;
};
export { createJWT, verifyToken };
