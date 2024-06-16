const exrepss = require('express')
const router = exrepss.Router()

const CarApiController = require('../../controllers/api/CarApiController')

/**
 * url : http://127.0.0.1:3000/api/cars
 */
router.get('/',CarApiController.findAll)


module.exports=router