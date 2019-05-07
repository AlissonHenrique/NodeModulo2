const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      provider: DataTypes.BOOLEAN
    },
    {
      // automatizar o processo de criptografia da senha
      // antes de envia-la para o banco
      /* hoocks podem ser desparados antes de diversas estápas como:
    criação, deleção, atualização, dentre outras, permitindo que
    manipulemos os valores que serão salvos no banco de dados
  */

      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
        }
      }
    }
  )
  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }
  return User
}
