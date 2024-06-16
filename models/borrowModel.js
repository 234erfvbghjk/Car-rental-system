const {sequelize} = require("../config/database");
const { DataTypes } = require("sequelize");
const Car = require("./CarModel");
const User = require("./usersModel");

const Borrow = sequelize.define("Borrow", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Car,
            key: "CarId",
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "userId",
        },
    },
    status: {
        // 租赁信息的状态
        // 0 被租赁
        // 1 续借
        // 2 归还
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

Car.belongsToMany(User, { through: Borrow, foreignKey: "CarId" });
User.belongsToMany(Car, { through: Borrow, foreignKey: "userId" });

Borrow.belongsTo(User, { foreignKey: "userId" });
Borrow.belongsTo(Car, { foreignKey: "CarId" });

User.hasMany(Borrow, { foreignKey: "userId" });
Car.hasMany(Borrow, { foreignKey: "CarId" });

module.exports = Borrow;
