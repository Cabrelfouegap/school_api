const express = require('express');
const bodyParser = require('body-parser');
const etudiantsRoutes = require('./routes/etudiants');
const enseignantsRoutes = require('./routes/enseignants');
const classesRoutes = require('./routes/classes');

const app = express();
app.use(bodyParser.json());

// Ajouter les routes
app.use('/etudiants', etudiantsRoutes);
app.use('/enseignants', enseignantsRoutes);
app.use('/classes', classesRoutes);


// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
