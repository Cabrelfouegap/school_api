'use strict';
const {Model} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Etudiant extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Etudiant.init({
//     nom: DataTypes.STRING,
//     prenom: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//     email: DataTypes.STRING,
//     classe_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Etudiant',
//   });
//   return Etudiant;
// };

module.exports = (sequelize, DataTypes) => {
  const Etudiant = sequelize.define('Etudiant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    classe_id: DataTypes.INTEGER,
  });

  return Etudiant;
};
