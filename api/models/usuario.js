'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nome:{ 
      type:DataTypes.STRING,
      allowNull:false,
    },
    primeiro_nome:{ 
      type:DataTypes.STRING,
      allowNull:false,
    },
    saldo:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    },
    senha:{ 
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{ 
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName:'usuarios'
  });
  return Usuario;
};