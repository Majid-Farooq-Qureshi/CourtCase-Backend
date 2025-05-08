const Hearing = require("../models/hearingModel.js");

exports.getAllHearings = (req, res) => {
    Hearing.getAll((err, hearings) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch hearings" });
        }

        const formattedHearings = hearings.map((h) => ({
            ...h,
            hearing_date: formatDate(h.hearing_date),
        }));

        res.json(formattedHearings);
    });
};

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

exports.addHearing = (req, res) => {
    const hearingData = req.body;

    Hearing.add(hearingData, (err, result) => {
        if (err) {
            console.error("Error while adding hearing:", err); // <-- Add this line
            return res.status(500).json({ error: "Failed to add hearing" });
        }
        res.json({ message: "Hearing added successfully", result });
    });
};
