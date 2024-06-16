const AuthAdminService = require('../../Services/admin/AuthAdminService')
const jwt = require('jsonwebtoken')
const { secret, expiresIn } = require('../../config/token')

const AuthAdminController = {
  findAll:async (req,res)=>{
    const result = await  AuthAdminService.findAll()
    // return result
  res.json(result)
  },
  register: async function (req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({
        code: -1,
        msg: '请输入正确的账号和密码'
      })
    }
    // const file = req.file ? req.file : ""
    // req.body.UserImg=file.path.substring(6)
    const result = await AuthAdminService.create(req.body)
    res.json(result)
  },
  // 登录检测接口
  login: async function (req, res) {
    const { username, password } = req.body;
    const user = await AuthAdminService.query(username);

    if (!user) {
      res.json({
        code: -2,
        msg: "用户不存在"
      });
      return
    }

    // 检查密码
    if (user.password !== password) {
      res.json({
        code: -1,
        msg: "密码错误"
      });
      return
    }

    if (user.role !== "admin") {
      res.json({
        code: -3,
        msg: "没有权限"
      });
      return
    }

    const token = jwt.sign({ username, id: user.userId }, secret, { expiresIn}); // 确保 expiresIn 是字符串，并加上单位（如 's' 表示秒）

    res.json({
      code: 1,
      msg: "登录成功",
      token
    });
  },

  update:async (req,res)=>{
    const {id}= req.params
    const result =  await AuthAdminService.update({id})
    if(!result){
      res.json({
        code:-1,
        msg:"修改失败"
      })
    }
    res.json({

      code:1,
      msg:"修改成功"
    })
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const result = await AuthAdminService.delete({ id });
    if (!result) {
      return res.json({
        code: -1,
        msg: "删除失败"
      });
    }
    return res.json({
      code: 1,
      msg: "删除成功"
    });
  }
}

module.exports = AuthAdminController