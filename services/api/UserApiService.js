const User = require("../../models/usersModel");
const UserService = {
    async create({username, password}) {
        return await User.create({username, password});
    },
    // 登录功能
    async findOne(username,) {
        return await User.findOne({where: {username}});
    },
};

module.exports = UserService;
