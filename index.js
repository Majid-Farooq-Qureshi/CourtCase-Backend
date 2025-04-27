const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const caseRoutes = require('./routes/caseRoutes'); // <-- add this

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', authRoutes);
app.use('/', caseRoutes);  // <-- prefix for case routes

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
