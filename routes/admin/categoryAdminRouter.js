const express = require('express')
const CategoryAdminController =require('../../controllers/admin/CategoryAdminController')

const router = express.Router()

router.get('/',CategoryAdminController.findAll)
router.post('/',CategoryAdminController.create)
router.put('/:id',CategoryAdminController.update)
router.delete('/:id',CategoryAdminController.delete)

module.exports=router