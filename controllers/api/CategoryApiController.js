const CategoryApiService = require('../../Services/api/CategoryApiService')

const CategoryApiController = {
    findAll: async (req, res) => {
        const row = await CategoryApiService.findAll()
        res.json(row)
    },
}

module.exports = CategoryApiController