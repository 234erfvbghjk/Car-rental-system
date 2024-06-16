const express = require('express')
const router = express.Router()
// 导入控制台
const AuthApiController = require('../../controllers/api/UserApiController')
// CRUD增删改查

// 注册模块
// router.post('/register',控制台.方法)
/**
 * url: /api/users/register
 */
router.post('/register', AuthApiController.register)
// 登录模块
/**
 * url: /api/users/login
 */
router.post('/login', AuthApiController.login)

// // 修改
// /**
//  * url： /api/users/delete
//  */
// router.put('/:id', AuthApiController.update)


module.exports = router