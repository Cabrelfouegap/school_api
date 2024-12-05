const { Classe } = require('../models');

// Récupérer toutes les classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Classe.findAll();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des classes.' });
  }
};

// Ajouter une classe
exports.addClass = async (req, res) => {
  try {
    const { nom, niveau, enseignant_principal_id } = req.body;
    const newClass = await Classe.create({ nom, niveau, enseignant_principal_id });
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout de la classe.' });
  }
};

// Modifier une classe
exports.updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const classe = await Classe.findByPk(id);

    if (!classe) return res.status(404).json({ error: 'Classe non trouvée.' });

    await classe.update(updates);
    res.status(200).json(classe);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la modification de la classe.' });
  }
};

// Supprimer une classe
exports.deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const classe = await Classe.findByPk(id);

    if (!classe) return res.status(404).json({ error: 'Classe non trouvée.' });

    await classe.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la classe.' });
  }
};
