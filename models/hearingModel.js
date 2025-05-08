const db = require("../config/db.js");

const Hearing = {
    getAll : (callback) => {
        const sql = "Select * from hearings";
        db.query(sql, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
    
    add: (hearingData, callback) => {   
        const { case_id, hearing_date, judge, status } = hearingData;

        const sql = "INSERT INTO hearings (case_id, hearing_date, judge, status) VALUES (?, ?, ?, ?)";
        
        db.query(sql, [case_id, hearing_date, judge, status], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }

};

module.exports = Hearing;