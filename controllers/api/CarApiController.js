const CarApiService = require('../../Services/api/CarApiService')

const CarApiController = {
    findAll:async (req,res)=>{
        const row = await CarApiService.findAll()
        res.json(row)
    },
}

module.exports=CarApiController