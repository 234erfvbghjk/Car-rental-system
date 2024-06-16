const Car = require('../../models/CarModel');

const CarAdminService = {
    create: async (params) => {
        return await Car.create(params);
    },
    findAll: async (offset, limit) => {
        // 确保 offset 和 limit 是整数
        offset = parseInt(offset, 10);
        limit = parseInt(limit, 10);

        if (isNaN(offset) || isNaN(limit) || offset < 0 || limit <= 0) {
            throw new Error('Invalid offset or limit value');
        }

        const row = await Car.findAndCountAll({
            offset,
            limit
        });
        return row;
    },
    update: async ({id, CarName, CarPrice, cid}) => {
        const row = await Car.update({CarName, CarPrice, cid}, {where: {CarId: id}});
        return row;
    },
    delete: async ({id}) => {
        const row = await Car.destroy({where: {CarId: id}});
        return row;
    }
};

module.exports = CarAdminService;