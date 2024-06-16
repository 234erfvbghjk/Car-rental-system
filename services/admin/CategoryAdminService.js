const {sequelize} = require('../../config/database.js')

const Category = require('../../models/categoryModel')
const Car = require('../../models/CarModel')

const CategoryAdminService = {
    create: async (name) => {
        const row = await Category.create({name})
        return row
    },
    findAll: async () => {
        const row = await Category.findAll()
        return row
    },
    update: async ({id, name, sort}) => {
        const row = await Category.update({name, sort}, {where: {cid: id}})
        return row
    },
    // delete: async ({id}) => {
    //     const row = await Category.update(
    //         {is_deleted: true},
    //         {where: {cid: id}}
    //     );
    //     return row;
    // }
    delete: async ({ id }) => {
        const transaction = await sequelize.transaction();
        try {
            // 删除与分类相关的所有 CarModel 记录
            await Car.destroy({ where: { categoryId: id }, transaction });

            // 软删除分类记录
            const row = await Category.update(
                { is_deleted: true },
                { where: { cid: id }, transaction }
            );
            await transaction.commit();
            return row;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}
module.exports = CategoryAdminService


//const { sequelize } = require('../models'); // 假设 sequelize 实例在 models 文件夹中
// const { Category, RelatedModel1, RelatedModel2 } = require('../models'); // 假设相关模型在 models 文件夹中
//
// delete: async ({ id }) => {
//     const transaction = await sequelize.transaction();
//     try {
//         // 假设 RelatedModel1 和 RelatedModel2 是与分类表有关联的表
//         await RelatedModel1.destroy({ where: { categoryId: id }, transaction });
//         await RelatedModel2.destroy({ where: { categoryId: id }, transaction });
//
//         const row = await Category.update(
//             { is_deleted: true },
//             { where: { cid: id }, transaction }
//         );
//
//         await transaction.commit();
//         return row;
//     } catch (error) {
//         await transaction.rollback();
//         throw error;
//     }
// }