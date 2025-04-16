const express = require('express');
const app = express();
const db = require('./db');

// minion router
const router = express.Router();

router.get('/', (req, res, next) => {
    const allMinions = db.getAllFromDatabase('minions');
    res.status(200).send(allMinions);
});

module.exports = router;
