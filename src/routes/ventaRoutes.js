const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Rutas para usuarios
router.get('/', ventaController.getAllVentas);

router.get('/:id', ventaController.getVentaById);
//router.post('/', userController.createUser);



module.exports = router;
