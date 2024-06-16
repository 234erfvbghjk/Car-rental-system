const {sequelize} = require("../config/database");
const { DataTypes } = require("sequelize");
const Category = require("./categoryModel");


const Car = sequelize.define("Car", {
    CarId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CarName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CarPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'cid'
        }
    },
    img: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'cars', // 确保表名正确
    timestamps: false // 如果不需要时间戳字段
});

Car.hasMany(Category, { foreignKey: "cid" });
Category.belongsTo(Car, { foreignKey: "cid" });

module.exports = Car;

