const express = require('express')
const CarAdminController = require('../../controllers/admin/CarAdminController')
// 图片上传位置需要的第三方库
const multer = require('multer')
// 将图片上传的位置
const uploda = multer({dest:'public/uplodas/'})

const router = express.Router()
// CRUD
// 当前路径 http://127.0.0.1:3000/admin/cars/
router.get('/',CarAdminController.findAll)
router.post('/',uploda.single("img"),CarAdminController.create)
router.put('/:id',CarAdminController.update)
router.delete('/:id',CarAdminController.delete)


module.exports=router