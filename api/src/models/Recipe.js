const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING
    },

    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },

    healthScore: {
      type: DataTypes.INTEGER
    },

    steps: {
      type: DataTypes.TEXT
    }

  },
  {
    timestamps: false
  });
};
