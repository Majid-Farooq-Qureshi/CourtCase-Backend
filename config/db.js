const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'CC',
    password: 'ccms123',
    database: 'court_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = db;
