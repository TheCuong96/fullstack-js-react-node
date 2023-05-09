'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsTo(models.Group); // đây là mối quan hệ 1-1
            User.belongsToMany(models.Project, { through: 'Project_User' }); //Project và User là quan hệ n-n thông qua Project_User, nên User với Project_User là quan hệ 1-n
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            username: DataTypes.STRING,
            address: DataTypes.STRING,
            sex: DataTypes.STRING,
            phone: DataTypes.STRING,
            groupId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'User',
        }
    );
    return User;
};
