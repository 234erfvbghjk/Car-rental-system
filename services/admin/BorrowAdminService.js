const Borrow = require('../../models/borrowModel')
const User = require('../../models/usersModel')
const Car = require('../../models/CarModel')

const BorrowAdminService = {
    async findAll() {
        return await Borrow.findAll({
            include: [{ model: User }, { model: Car }],
        });
    },
    async update(id) {
        return await Borrow.update({ status: 1 }, { where: { id } });
    },
    async delete(id) {
        return await Borrow.destroy({ where: { id } });
    },
};

module.exports=BorrowAdminService