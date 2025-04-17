const express = require('express');
const db = require('./db.js');

// work router
const router = express.Router({mergeParams: true});
const work = 'work';

// GET request
router.get('/', (req, res, next) => {
    const minionId = req.params.minionId;
    const allWork = db.getAllFromDatabase(work);

    if (isNaN(minionId) === true) {
        return res.status(404).send('Not a number');
    }

    const minionWork = allWork.filter(work => work.minionId === minionId);

    if (minionWork.length === 0) {
        return res.status(404).send('Invalid ID');
    }

    res.send(minionWork);
});

module.exports = router;
