const express = require('express');
const router = express.Router();
const userController = require('../controllers/ventaController');

// Rutas para usuarios
router.get('/', userController.getAllVentas);
//router.post('/', userController.createUser);

module.exports = router;
