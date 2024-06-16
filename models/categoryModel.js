const {sequelize} = require("../config/database");
const {DataTypes} = require("sequelize");


const Category = sequelize.define("Category", {
        cid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        sort: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'categories', // 确保表名正确
        timestamps: false // 如果不需要时间戳字段
    }
);


module.exports = Category;

