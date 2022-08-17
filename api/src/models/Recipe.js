const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      get() {
        const value = this.getDataValue('id');
        return `_Db${value}` ;
      }
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    image: {
      type: DataTypes.STRING,
      defaultValue: "https://thumbs.dreamstime.com/b/signo-de-interrogaci%C3%B3n-hecho-de-guisantes-en-la-placa-32369130.jpg"
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    steps: {
      type: DataTypes.JSON
    }

  },
  {
    timestamps: false
  });
};
