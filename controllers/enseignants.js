const { Enseignant } = require('../models');

// Récupérer tous les enseignants
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Enseignant.findAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des enseignants.' });
  }
};

// Ajouter un enseignant
exports.addTeacher = async (req, res) => {
  try {
    const { nom, prenom, email, matiere, classe_id } = req.body;
    const newTeacher = await Enseignant.create({ nom, prenom, email, matiere, classe_id });
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'enseignant.' });
  }
};

// Modifier un enseignant
exports.updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const teacher = await Enseignant.findByPk(id);

    if (!teacher) return res.status(404).json({ error: 'Enseignant non trouvé.' });

    await teacher.update(updates);
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la modification de l\'enseignant.' });
  }
};

// Supprimer un enseignant
exports.deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Enseignant.findByPk(id);

    if (!teacher) return res.status(404).json({ error: 'Enseignant non trouvé.' });

    await teacher.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'enseignant.' });
  }
};
