const { User } = require('../models')

class UserController {
  create(req, res) {
    return res.render('auth/signup')
  }
  git

  async store(req, res) {
    const { filename: avatar } = req.file

    User.create({ ...req.body, avatar: avatar })
    User.create(req.body)
    return res.redirect('/')
  }
}
module.exports = new UserController()
