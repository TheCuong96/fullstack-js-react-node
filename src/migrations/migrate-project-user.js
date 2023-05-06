"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Project_User", {
            id: {
                allowNull: false, // bắt buộc phải có giá trị ở ô này
                autoIncrement: true, // giá trị tự động tăng
                primaryKey: true, // khóa chính
                type: Sequelize.INTEGER, // kiểu dữ liệu
            },
            projectId: {
                type: Sequelize.INTEGER,
            },
            userId: {
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
        await queryInterface.dropTable("Project_User");
    },
};
