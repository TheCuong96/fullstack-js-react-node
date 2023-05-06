"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Role", {
            id: {
                allowNull: false, // bắt buộc phải có giá trị ở ô này
                autoIncrement: true, // giá trị tự động tăng
                primaryKey: true, // khóa chính
                type: Sequelize.INTEGER, // kiểu dữ liệu
            },
            url: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Role");
    },
};
