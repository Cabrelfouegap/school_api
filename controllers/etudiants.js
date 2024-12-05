const { Etudiant } = require('../models');

// Récupérer tous les étudiants
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Etudiant.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des étudiants.' });
  }
};

// Ajouter un étudiant
exports.addStudent = async (req, res) => {
  try {
    const { nom, prenom, age, email, classe_id } = req.body;
    const newStudent = await Etudiant.create({ nom, prenom, age, email, classe_id });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'étudiant.' });
  }
};

// Modifier un étudiant
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const student = await Etudiant.findByPk(id);

    if (!student) return res.status(404).json({ error: 'Étudiant non trouvé.' });

    await student.update(updates);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la modification de l\'étudiant.' });
  }
};

// Supprimer un étudiant
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Etudiant.findByPk(id);

    if (!student) return res.status(404).json({ error: 'Étudiant non trouvé.' });

    await student.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'étudiant.' });
  }
};
