const express = require('express');
const fileComparatorService = require('./server/service/file-comparator')

const app = express();
const port = 3000

app.get('/', async (req, res) => {
    const result = await fileComparatorService();
    console.log(result);
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})