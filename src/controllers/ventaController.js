const ventaModel = require('../models/ventaModel');

module.exports = {
    getAllVentas: (req, res) => {
        ventaModel.getAllVentas((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(result);
        });
    },

    getVentaById: (req, res) => {
        const { id } = req.params;
        ventaModel.getVentaById(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if (result.length === 0) {
                res.status(404).send('Venta no encontrada');
                return;
            }
            res.json(result[0]);
        });
    },

    /*
    createUser: (req, res) => {
        const { name, email } = req.body;
        userModel.createUser(name, email, (err, result) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.status(201).send('Usuario creado correctamente');
        });
    }*/
};
