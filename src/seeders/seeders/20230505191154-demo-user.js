"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "Users", // truyển tên table vào
            [
                {
                    email: "data1@gmail.com",
                    password: "111111",
                    username: "data 1",
                },
                {
                    email: "data2@gmail.com",
                    password: "222222",
                    username: "data 2",
                },
                {
                    email: "data3@gmail.com",
                    password: "333333",
                    username: "data 3",
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
