const express = require('express');
const db = require('./db.js');

// work router
const router = express.Router({mergeParams: true});
const work = 'work';

// GET request
router.get('/', (req, res, next) => {
    const minionId = req.params.minionId;
    const allWork = db.getAllFromDatabase(work);
    const minionWork = allWork.filter(work => work.minionId === minionId);
    res.send(minionWork);
});

module.exports = router;
