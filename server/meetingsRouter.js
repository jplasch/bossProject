const express = require('express');
const db = require('./db');

// meetings router
const router = express.Router();
const meetings = 'meetings';

// GET request
router.get('/', (req, res, next) => {
    const allMeetings = db.getAllFromDatabase(meetings);
    res.send(allMeetings);
});

// POST request
router.post('/', (req, res, next) => {
    const meeting = db.createMeeting();
    const createdMeeting = db.addToDatabase(meetings, meeting);
    res.status(201).send(createdMeeting);
});

// DELETE request
router.delete('/', (req, res, next) => {
    db.deleteAllFromDatabase(meetings);
    res.status(204).send();
});

module.exports = router;
