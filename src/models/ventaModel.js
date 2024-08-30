const db = require('../config/dbConfig');

class Venta {
    getAllVentas(callback) {
        const sql = 'SELECT * FROM ventas';
        db.query(sql, callback);

        console.log(db);
    }

    getVentaById(id, callback){
        const sql = 'SELECT * FROM ventas WHERE idVenta = ?';
        db.query(sql, [id], callback);
    }



    /*
    createUser(name, email, callback) {
        const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
        db.query(sql, [name, email], callback);
    }*/
}

module.exports = new Venta();
