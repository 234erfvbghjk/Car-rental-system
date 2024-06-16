// const express = require('express')
const CategoryAdminService = require('../../Services/admin/CategoryAdminService')

const CategoryAdminController = {
    create: async (req, res) => {
        const {name} = req.body
        const row = await CategoryAdminService.create(name)
        res.json(row)
    },
    findAll: async (req, res) => {
        const row = await CategoryAdminService.findAll()
        res.json(row)
    },
    update: async (req, res) => {
        const {id} = req.params
        const {name, sort} = req.body
        const result = await CategoryAdminService.update({id, name, sort})
        if (!result) {
            res.json({
                code: -1,
                msg: "修改失败"
            })
        }
        res.json({
            code: 1,
            msg: "修改成功"
        })
    },
    // delete: async (req, res) => {
    //     const { id } = req.params;
    //     try {
    //         const result = await CategoryAdminService.delete({ id });
    //         if (!result) {
    //             return res.json({
    //                 code: -1,
    //                 msg: "删除失败"
    //             });
    //         }
    //         return res.json({
    //             code: 1,
    //             msg: "删除成功"
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({
    //             code: -1,
    //             msg: "服务器错误"
    //         });
    //     }
    // }
    delete: async (req, res) => {
        const {id} = req.params;
        try {
            const result = await CategoryAdminService.delete({where:{id}});
            if (!result) {
                return res.json({
                    code: -1,
                    msg: "删除失败"
                });
            }
            return res.json({
                code: 1,
                msg: "删除成功"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                code: -1,
                msg: "服务器错误"
            });
        }
    }
}

module.exports=CategoryAdminController
