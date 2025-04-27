const db = require('../config/db');

const createUser = (role, name, email, password, callback) => {
    const sql = 'INSERT INTO users (role, name, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [role, name, email, password], callback);
};

const findUserByEmail = (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
};

const findUserByCredentials = (email, password, role, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ? AND role = ?';
    db.query(sql, [email, password, role], callback);
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserByCredentials
};
