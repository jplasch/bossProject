const express = require('express');
const apiRouter = express.Router();

// Mount minionsRouter to apiRouter
const minionsRouter = require('./minionsRouter');
apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
