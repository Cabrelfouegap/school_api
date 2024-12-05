'use strict';
const {Model} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Classe extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Classe.init({
//     nom: DataTypes.STRING,
//     niveau: DataTypes.STRING,
//     enseignant_principal_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Classe',
//   });
//   return Classe;
// };

module.exports = (sequelize, DataTypes) => {
  const Classe = sequelize.define('Classe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: DataTypes.STRING,
    niveau: DataTypes.STRING,
    enseignant_principal_id: DataTypes.INTEGER
  });

  return Classe;
};
