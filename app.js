const express = require('express');
const createCustomers = require('./middleware/createCustomers');
var cors = require('cors');
const {join} = require("path");
const app = express();
const port = 3004;


app.use(cors());

app.get('/getManifest', (req, res) => {
    res.json(createCustomers.create())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})