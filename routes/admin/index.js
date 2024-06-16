const express = require('express')
const router = express.Router()
const authAdminRouter = require('./authAdminRouter')
const CategoryAdminRouter = require('./categoryAdminRouter')
const CarsAdminRouter = require('./CarAdminRouter')
const BorrowAdminRouter = require("./BorrowAdminRouter")


// auth 登录相关的意思
router.use('/auth', authAdminRouter)
router.use('/category',CategoryAdminRouter)
router.use('/cars',CarsAdminRouter)
router.use('/borrow',BorrowAdminRouter)

module.exports = router