const Car = require("../../models/CarModel");

const CarApiService = {
    findAll:async ()=>{
        const row = await Car.findAll()
        return row
    }
}

module.exports=CarApiService