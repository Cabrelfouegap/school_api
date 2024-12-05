const express = require('express');
const router = express.Router();
const { getAllClasses, addClass, updateClass, deleteClass } = require('../controllers/classes');

router.get('/', getAllClasses);
router.post('/', addClass);
router.put('/:id', updateClass);
router.delete('/:id', deleteClass);

module.exports = router;
