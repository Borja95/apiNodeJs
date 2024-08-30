const db = require('../config/dbConfig');

class User {
    getAllVentas(callback) {
        const sql = 'SELECT * FROM ventas limit 100';
        db.query(sql, callback);
    }

    /*
    createUser(name, email, callback) {
        const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
        db.query(sql, [name, email], callback);
    }*/
}

module.exports = new User();
