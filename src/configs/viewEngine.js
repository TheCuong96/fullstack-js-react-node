import express from "express";

const configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); // thằng này để nó xác định rằng các view engine, còn gọi cách khác là các code html mà node có thể đọc được là phải thông qua file có đuôi là ejs
    app.set("views", "./src/views"); // thằng này để xác định rằng những view UI ta viết bằng html sẽ được đọc trong thư mục là ./src/views
};

export default configViewEngine;
