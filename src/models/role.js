"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Role.belongsToMany(models.Group, { through: "Group_Role" }); // vì Role và Group là mối quan hệ nhiều nhiều, nên sinh ra table Group_Role(là bảng thứ 3), Role với Group bây giờ sẽ quan hệ 1-n thông qua table Group_Role
        }
    }
    Role.init(
        {
            url: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Role",
        }
    );
    return Role;
};
