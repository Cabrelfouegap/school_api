'use strict';
const {Model} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Enseignant extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Enseignant.init({
//     nom: DataTypes.STRING,
//     prenom: DataTypes.STRING,
//     email: DataTypes.STRING,
//     matiere: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Enseignant',
//   });
//   return Enseignant;
// };

module.exports = (sequelize, DataTypes) => {
  const Enseignant = sequelize.define('Enseignant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    matiere: DataTypes.STRING,
    classe_id: DataTypes.INTEGER,
  });

  return Enseignant;
};