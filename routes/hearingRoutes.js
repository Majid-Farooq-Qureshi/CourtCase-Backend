const express = require('express');
const router = express.Router();
const hearingController = require('../controllers/hearingController');

router.get('/hearings', hearingController.getAllHearings);
router.post('/hearings', hearingController.addHearing);

module.exports = router;