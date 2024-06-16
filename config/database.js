const { Sequelize } = require('sequelize');

// 第一个值是数据库名，第二个值是用户名，第三个值是密码，第四个值是连接的配置
const sequelize = new Sequelize('carborrow', 'root', 'Chong0114', {
    host: 'localhost',
    dialect: 'mysql'
});

// 测试数据库连接
sequelize.authenticate()
    .then(() => {
        console.log('数据库连接已成功建立。');
    })
    .catch(err => {
        console.error('无法连接到数据库:', err);
    });

module.exports = sequelize ; // 导出 sequelize 实例

