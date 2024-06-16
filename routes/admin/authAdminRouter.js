const express = require('express')
const router = express.Router()
// 图片上传位置需要的第三方库
const multer = require('multer')
// 将图片上传的位置
const uploda = multer({dest:'public/uplodas/'})

// 导入控制台
const AuthAdminController = require('../../controllers/admin/AuthAdminController')
// CRUD增删改查

// 管理员查看所有用户
/**
 * url: /admin/auth
 */
router.get('/',AuthAdminController.findAll)
/**
 * url: /admin/auth/register 
 */
router.post('/register', uploda.single("UserImg"),AuthAdminController.register)
// 登录模块
/**
 * url: /admin/auth/login
 */
router.post('/login', AuthAdminController.login)
// 管理员修改信息模块
/**
 * url: /admin/auth/id
 */
router.put('/:id',AuthAdminController.update)
// 管理员删除用户或者删除管理员信息
/**
 * url: /admin/auth/id
 */
router.delete('/:id',AuthAdminController.delete)






module.exports = router