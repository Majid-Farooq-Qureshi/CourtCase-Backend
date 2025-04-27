const db = require('../config/db');

const Case = {
    getAll: (callback) => {
        db.query('SELECT * FROM cases', (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    add: (caseData, callback) => {
        const { type, status, lawyer, hearing_date } = caseData;

        const generateCaseId = () => {
            const randomNum = Math.floor(1000 + Math.random() * 9000);
            return `C-${randomNum}`;
        };

        const case_id = generateCaseId();

        db.query('INSERT INTO cases (case_id, type, status, lawyer, hearing_date) VALUES (?, ?, ?, ?, ?)', 
            [case_id, type, status, lawyer, hearing_date],
            (err, result) => {
                if (err) return callback(err);
                callback(null, result);
            }
        );
    }
};


module.exports = Case;
