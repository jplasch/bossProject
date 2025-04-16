const express = require('express');
const app = express();
const db = require('./db');

// ideas router
const router = express.Router();
const ideas = 'ideas';

// GET requests
router.get('/', (req, res, next) => {
    const allIdeas = db.getAllFromDatabase(ideas);
    res.send(allIdeas);
});

router.get('/:ideaId', (req, res, next) => {
    const id = req.params.ideaId;

    if (isNaN(id) === true) {
        return res.status(404).send('Not a number');
    }

    const idea = db.getFromDatabaseById(ideas, id);
    if (idea === undefined) {
        return res.status(404).send('Invalid ID');
    }

    res.send(idea);
});

module.exports = router;
