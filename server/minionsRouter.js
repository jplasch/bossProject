const express = require('express');
const app = express();
const db = require('./db');

// minions router
const router = express.Router();
const minions = 'minions';

// GET requests
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

// PUT request
router.put('/:minionId', (req, res, next) => {
    const minion = req.body;
    const id = req.params.minionId;

    if (isNaN(id) === true) {
        return res.status(404).send('Not a number');
    }

    const updatedMinion = db.updateInstanceInDatabase(minions, minion);
    if (updatedMinion === null) {
        return res.status(404).send('Invalid ID');
    }

    res.send(updatedMinion);
});

// POST request
router.post('/', (req, res, next) => {
    const minion = req.body;
    const createdMinion = db.addToDatabase(minions, minion);

    if (createdMinion !== undefined) {
        return res.status(201).send(createdMinion);
    }
});

// DELETE request
router.delete('/:minionId', (req, res, next) => {
    const id = req.params.minionId;

    if (isNaN(id) === true) {
        return res.status(404).send('Not a number');
    }

    const deletedMinion = db.deleteFromDatabasebyId(minions, id);

    if (deletedMinion === false) {
        return res.status(404).send('Invalid ID');
    }

    res.status(204).send(deletedMinion);
});

module.exports = router;
