const exrepss = require('express')
const CategoryApiController = require("../../controllers/api/CategoryApiController");
const router = exrepss.Router()

router.get('/',CategoryApiController.findAll)

module.exports=router