"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Project extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Project.belongsToMany(models.User, { through: "Project_User" }); //Project và User là quan hệ n-n thông qua Project_User, nên Project với Project_User là quan hệ 1-n
        }
    }
    Project.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            startDate: DataTypes.STRING,
            customerId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Project",
        }
    );
    return Project;
};
