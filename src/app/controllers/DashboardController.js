const { User } = require('../models')

class DashboardController {
  async index (req, res) {
    // busca todos os user com provider true
    const providers = await User.findAll({ where: { provider: true } })

    return res.render('dashboard', { providers })
  }
}
module.exports = new DashboardController()
