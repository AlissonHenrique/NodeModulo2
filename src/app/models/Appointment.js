module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  // relaciona o usuario ao agendamento
  // user id chave q guarda o relacionamento
  Appointment.associate = models => {
    // usuario agenda
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' })
    // provider presta serviço
    Appointment.belongsTo(models.User, { foreignKey: 'provider_id' })
  }
  return Appointment
}
