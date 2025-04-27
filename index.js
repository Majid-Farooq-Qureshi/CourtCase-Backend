const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// MySQL Connection
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

// Route to handle registration
app.post('/register', (req, res) => {
    const { role, name, email, password } = req.body;

    const sql = 'INSERT INTO users (role, name, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [role, name, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Registration failed" });
        }
        res.json({ message: "Registration successful" });
    });
});

// Route for login
app.post('/login', (req, res) => {
    const { email, password, role } = req.body;
    
    const query = 'SELECT * FROM users WHERE email = ? AND password = ? AND role = ?';
    
    db.query(query, [email, password, role], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
