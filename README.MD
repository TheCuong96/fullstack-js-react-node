
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

"sequelize": "6.13.0",
"sequelize-cli": "6.3.0" `Sequelize là một ORM (Object-Relational Mapping) cho Node.js, cho phép bạn tương tác với các cơ sở dữ liệu quan hệ như MySQL, PostgreSQL, SQL Server và SQLite bằng cách sử dụng các đối tượng JavaScript thay vì viết các truy vấn SQL trực tiếp. ORM là một kỹ thuật cho phép bạn tương tác với cơ sở dữ liệu dưới dạng các đối tượng và quản lý quan hệ giữa chúng một cách trực quan và dễ dàng hơn. Sequelize cho phép bạn định nghĩa các mô hình (models) cho các đối tượng trong cơ sở dữ liệu của bạn, và sau đó sử dụng các phương thức của các đối tượng này để thực hiện các thao tác như tìm kiếm, thêm, cập nhật và xóa dữ liệu.`