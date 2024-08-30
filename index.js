const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/ventaRoutes');

const app = express();
const port = 3001;



// Middleware para parsear JSON
app.use(bodyParser.json());

// Rutas
app.use('/api/ventas', userRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});