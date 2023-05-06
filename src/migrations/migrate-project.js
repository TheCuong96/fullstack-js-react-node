"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Project", {
            id: {
                allowNull: false, // bắt buộc phải có giá trị ở ô này
                autoIncrement: true, // giá trị tự động tăng
                primaryKey: true, // khóa chính
                type: Sequelize.INTEGER, // kiểu dữ liệu
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            startData: {
                type: Sequelize.STRING,
            },
            customerId: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Project");
    },
};
