const express = require('express');
const app = express();
const db = require('./db');

// minions router
const router = express.Router();
const minions = 'minions';

router.get('/', (req, res, next) => {
    const allMinions = db.getAllFromDatabase(minions);
    res.status(200).send(allMinions);
});

router.get('/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    if (isNaN(id) === true) {
        return res.status(404).send('Not a number');
    }

    const minion = db.getFromDatabaseById(minions, id);
    if (minion === undefined) {
        return res.status(404).send('Invalid ID');
    }
    
    res.send(minion);
});

module.exports = router;
