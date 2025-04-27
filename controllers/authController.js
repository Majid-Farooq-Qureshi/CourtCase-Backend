const User = require('../models/userModel');

const register = (req, res) => {
    const { role, name, email, password } = req.body;

    // First, check if user already exists
    User.findUserByEmail(email, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Server error" });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: "User already registered" });
        }

        // If not exists, insert new user
        User.createUser(role, name, email, password, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Registration failed" });
            }
            res.json({ message: "Registration successful" });
        });
    });
};


const login = (req, res) => {
    const { email, password, role } = req.body;
    
    User.findUserByCredentials(email, password, role, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Login failed" });
        }
        
        if (results.length > 0) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
};

module.exports = {
    register,
    login
};
