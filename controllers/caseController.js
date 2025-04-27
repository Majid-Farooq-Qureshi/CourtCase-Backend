const Case = require('../models/caseModel');

exports.getAllCases = (req, res) => {
    Case.getAll((err, cases) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch cases' });
        }

        const formattedCases = cases.map(c => ({
            ...c,
            hearing_date: formatDate(c.hearing_date)
        }));

        res.json(formattedCases);
    });
};

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}


exports.addCase = (req, res) => {
    const caseData = req.body;
    Case.add(caseData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add case' });
        }
        res.json({ message: 'Case added successfully', result });
    });
};


