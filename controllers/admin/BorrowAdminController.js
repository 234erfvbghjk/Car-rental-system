const BorrowAdminService = require('../../Services/admin/BorrowAdminService')

const BorrowAdminController = {
    // findAll
    async findAll(req, res) {
        const borrows = await BorrowAdminService.findAll();
        const result = borrows.map((borrow) => {
            return {
                id: borrow.id,
                CarId: borrow.CarId,
                userId: borrow.userId,
                status: borrow.status,
                createdAt: borrow.createdAt,
                updatedAt: borrow.updatedAt,
                username: borrow.User ? borrow.User.username : null,
                bookTitle: borrow.Car ? borrow.Car.CarName : null,
                bookAuthor: borrow.Car ? borrow.Car.CarPrice : null,
            };
        });

        res.json(result);
    },
    //   // findOne
    //   // update
    async update(req, res) {
        const { id } = req.params;
        const result = await BorrowAdminService.update(id);
        if (!result) {
            res.json({ msg: "更新失败", code: -1 });
        }
        res.json({ msg: "更新成功", code: 1 });
    },
    //   // delete
    async delete(req, res) {
        const { id } = req.params;
        const result = await BorrowAdminService.delete(id);
        if (!result) {
            res.json({ msg: "删除失败", code: -1 });
        }
        res.json({ msg: "删除成功", code: 1 });
    },
};

module.exports=BorrowAdminController