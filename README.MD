
## 

"scripts": {
    "start": "nodemon --exec babel-node src/server.js" `version của node 12 || 14 mới dùng thằng này được`
    "start": "nodemon --exec ./node_modules/.bin/babel-node src/server.js" `còn version mới hơn thì setup như vậy`
},

"express": "4.17.1", `thằng này để hỗ trợ giao tiếp trong nodejs`
"body-parser": "1.19.0", `thằng này để biến đổi data lại json hoặc 1 data mà ta đọc được mỗi khi ta truy xuất data mà không đọc được`
"ejs": "3.1.6", `Thằng này để cho mình viết code html mà phối hợp với javascript trong đo`
"@babel/core": "7.15.5", 
"@babel/node": "7.15.4",
"@babel/preset-env": "7.15.6", `thằng này để cho phép ta dùng es6 được trong project này`
"nodemon": "2.0.12" `thằng này để server auto re-render mỗi khi ta update hay save lại code`
"dotenv": "10.0.0" `để ta có thể sử dụng file .env trong nodejs`
"mysql2": "2.3.0" `dùng để connect db`

"sequelize": "6.13.0",`Sequelize là một ORM (Object-Relational Mapping) cho Node.js, cho phép bạn tương tác với các cơ sở dữ liệu quan hệ như MySQL, PostgreSQL, SQL Server và SQLite bằng cách sử dụng các đối tượng JavaScript thay vì viết các truy vấn SQL trực tiếp. ORM là một kỹ thuật cho phép bạn tương tác với cơ sở dữ liệu dưới dạng các đối tượng và quản lý quan hệ giữa chúng một cách trực quan và dễ dàng hơn. Sequelize cho phép bạn định nghĩa các mô hình (models) cho các đối tượng trong cơ sở dữ liệu của bạn, và sau đó sử dụng các phương thức của các đối tượng này để thực hiện các thao tác như tìm kiếm, thêm, cập nhật và xóa dữ liệu.`
"sequelize-cli": "6.3.0" 
=> để setup sequelize thì: 
## tạo file .sequelizerc
var path = require('path');

module.exports = {
  'config': path.resolve('./src/config', 'config.json'),
  'migrations-path': path.resolve('./src/migrations', 'migrations'),
  'models-path': path.resolve('./src/models', 'models'),
  'seeders-path': path.resolve('./src/seeders', 'seeders')
}
## sau đó chạy lệnh: node_modules/.bin/sequelize init (nếu báo lỗi node_modules không tồn tại thì ta chỉnh lại dấu / thành \ )
- để nó render ra các file và tự động setup như trong file .sequelizerc

trong file: /src/config/config.json
{
  "development": { // dùng để chạy trên môi trường mà ta code
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": { // đây là môi trường cho tester chạy
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": { // đây là môi trường thực tế
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

- sau đó thì connect với database bằng sequelize
- cho nó tự tạo model thì :node_modules\.bin\sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string 
=> nó sẽ tạo cho ta 2 file: user và 1 file create-user, 1 cái trong model và 1 cái trong migrations
=> sau đó setup model để tạo ra các bảng mà ta muốn
=> sau đó chạy dòng lệnh này: node_modules\.bin\sequelize db:migrate :để tạo bảng đó trong cơ sở dữ liệu, bạn cần chạy 

=> chạy lệnh này để tạo ra form mẫu cho data : node_modules\.bin\sequelize seed:generate --name demo-user => để nó tạo ra file fake data trong folder seeders
=> sau đó chạy: node_modules\.bin\sequelize db:seed:all => để data tạo ra dưới database

## CORS: dùng để ngăn chặn các hành động từ đường link khác vào url của ta, nói cách khác nghĩa là bảo mật:
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,OPTIONS,PUT,PATCH,DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
