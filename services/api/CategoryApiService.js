const Category = require('../../models/categoryModel')

const CategoryApiService = {
    findAll: async ()=>{
        const row = await Category.findAll()
        return  row
    }
}

module.exports=CategoryApiService