const express = require('express');
const app = express();
const db = require('./db.js');
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');

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

// PUT requests
router.put('/:ideaId', (req, res, next) => {
    const idea = req.body;
    const id = req.params.ideaId;

    if (isNaN(id) === true) {
        return res.status(404).send('Not a number');
    }

    const updatedIdea = db.updateInstanceInDatabase(ideas, idea);
    if (updatedIdea === null) {
        return res.status(404).send('Invalid ID');
    }

    res.send(updatedIdea);
});

// POST request
router.post('/', checkMillionDollarIdea, (req, res, next) => {
    const idea = req.body;
    const createdIdea = db.addToDatabase(ideas, idea);

    if (createdIdea !== undefined) {
        return res.status(201).send(createdIdea);
    }
});

// DELETE request
router.delete('/:ideaId', (req, res, next) => {
    const id = req.params.ideaId;

    if (isNaN(id) === true) {
        return res.status(404).send('Not a number');
    }

    const deletedIdea = db.deleteFromDatabasebyId(ideas, id);

    if (deletedIdea === false) {
        return res.status(404).send('Invalid ID');
    }

    res.status(204).send(deletedIdea);
});

module.exports = router;
