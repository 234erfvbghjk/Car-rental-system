const user = require('../../models/usersModel')

const AuthAdminService = {
  // 查看所有用户
  findAll:async ()=>{
    const row =await user.findAll()
    return row
  },

  // 注册
  async create(params) {
    const row = await user.create(params)
    return row
  },

  query: async (username) => {
   const result =  await user.findOne({where:{ username }})
   return result
  },
  async check(username) {
    const res = await user.findOne({
      where: {
        username
      }
    })
    return !res
  },

  // 登录
  async login(params) {
    const row = await user.findOne({
      where: {
        username: params.username,
      }
    })
    if (row) {
      if (row.username === params.username) {
        return row
      } else {
        return false
      }

    }
  },
//   修改
  update:async ({id})=> {
    const row = await user.update( {where: {userId: id}})
    return row
  },
//   删除
//   delete:async ({id})=>{
//     const row = await user.destroy( {where: {userId: id}})
//     return row
//   }
  delete: async ({ id }) => {
    // 先删除 cars 表中引用的记录
    await Car.destroy({ where: { cid: id } });

    // 然后删除 categories 表中的记录
    const row = await Category.destroy({ where: { cid: id } });
    return row;
  }

}

module.exports = AuthAdminService