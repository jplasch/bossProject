const express = require('express');
const apiRouter = express.Router();

// Import various routers
const workRouter = require('./workRouter');
const minionsRouter = require('./minionsRouter');
const ideasRouter = require('./ideasRouter');
const meetingsRouter = require('./meetingsRouter');

// Mount various routers
minionsRouter.use('/work', workRouter);
apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
