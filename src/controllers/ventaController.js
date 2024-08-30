const userModel = require('../models/ventaModel');

module.exports = {
    getAllVentas: (req, res) => {
        userModel.getAllVentas((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(result);
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
