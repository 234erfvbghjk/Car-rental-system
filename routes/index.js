var express = require('express');
var router = express.Router();

const adminRouter = require('./admin/index')
const apiRouter = require('./api/index')

router.use('/admin', adminRouter)
router.use('/api',apiRouter)


module.exports = router;
