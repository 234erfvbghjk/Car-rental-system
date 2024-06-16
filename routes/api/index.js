const express = require('express')
const router = express.Router()

const UserApiRouter = require('./UserApiRouter')
const CarApiRouter = require('./CarApiRouter')
const CategoryApiRouter = require('./CategoryApiRouter')
const BorrowApiRouter = require('./BorrowApiRouter')


/**
 * /api/users
 * /api/cars
 * /api/category
 * /api/borrow
 */
router.use('/users',UserApiRouter)
router.use('/cars',CarApiRouter)
router.use('/category',CategoryApiRouter)
router.use('/borrow',BorrowApiRouter)


module.exports = router