const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
  static init(connection) {
    super.init(
      {
        nome: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cpf: DataTypes.STRING,
        rg: DataTypes.STRING,
        data: DataTypes.STRING,
        rua: DataTypes.STRING,
        numero: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        cep: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = Cliente;
