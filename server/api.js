const express = require('express');
const apiRouter = express.Router();

// Mount minionsRouter to apiRouter
const minionsRouter = require('./minionsRouter');
apiRouter.use('/minions', minionsRouter);

// Mount ideasRouter to apiRouter
const ideasRouter = require('./ideasRouter');
apiRouter.use('/ideas', ideasRouter);

// Mount meetingsRouter to apiRouter
const meetingsRouter = require('./meetingsRouter');
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
