"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Group.hasMany(models.User); //1-n, 1 group thì có nhiều user
            Group.belongsToMany(models.Role, { through: "Group_Role" }); // vì Group và Role là mối quan hệ nhiều nhiều, nên sinh ra table Group_Role(là bảng thứ 3), Group với Role bây giờ sẽ quan hệ 1-n thông qua table Group_Role
        }
    }
    Group.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Group",
        }
    );
    return Group;
};
