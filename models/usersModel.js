const {sequelize} = require("../config/database");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    UserImg: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        // 类型 enum 枚举  ['admin','user']
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
    },
});

module.exports = User;
