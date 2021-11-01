const express = require('express');
const fileComparatorService = require("../service/file-comparator");
const router = express.Router();

// middleware
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
})

router.get('/', async (req, res) => {
    const result = await fileComparatorService();
    console.log(result);
    res.send('Hello World!')
});

module.exports = router;