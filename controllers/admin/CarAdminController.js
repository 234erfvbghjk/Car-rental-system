const CarAdminService = require('../../Services/admin/CarAdminService');

const CarAdminController = {
    create: async (req, res) => {
        const file = req.file ? req.file : "";
        req.body.img = file.path.substring(6);
        const row = await CarAdminService.create(req.body);
        res.json(row);
    },
    findAll: async (req, res) => {
        const {page = 1, pageSize = 10} = req.query;
        const offset = (page - 1) * pageSize;
        const limit = parseInt(pageSize, 10);

        try {
            const row = await CarAdminService.findAll(offset, limit);
            res.json(row);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },
    update: async (req, res) => {
        const {id} = req.params;
        const {CarName, CarPrice, cid} = req.body;
        const result = await CarAdminService.update({id, CarName, CarPrice, cid});
        if (!result) {
            res.json({
                code: -1,
                msg: "修改失败"
            });
        } else {
            res.json({
                code: 1,
                msg: "修改成功"
            });
        }
    },
    delete: async (req, res) => {
        const {id} = req.params;
        const result = await CarAdminService.delete({id});
        if (!result) {
            res.json({
                code: -1,
                msg: "删除失败"
            });
        } else {
            res.json({
                code: 1,
                msg: "删除成功"
            });
        }
    }
};

module.exports = CarAdminController;