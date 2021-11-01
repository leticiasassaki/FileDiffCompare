const express = require('express');
const filesRoute = require('./server/route/files')

const app = express();
const port = 3000

app.use(filesRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})