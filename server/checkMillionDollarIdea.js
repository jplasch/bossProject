const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body;

    if (numWeeks === undefined || weeklyRevenue === undefined || isNaN(numWeeks) || isNaN(weeklyRevenue)) {
        return res.status(400).send('Revenue and weeks not supplied');
    }

    const value = numWeeks * weeklyRevenue;

    if (value < 1000000) {
        return res.status(400).send('Not a valid idea!');
    }

    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
