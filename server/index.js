const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001;

const Database = require('./Database');

var db = new Database();

app.use(cors())
app.use(express.json());

app.get('/', async (req, res) => {
    let { result } = await db.query("SELECT 'Hello World!' AS message");
    res.send(result.message);
})

app.post('/login', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let { result } = await db.query('SELECT uuid FROM users WHERE username=? && password=? LIMIT 1;', [username, password]);
    console.log(result[0]);
    if (result[0] !== undefined)
        res.status(200).json(result[0]).end();
    else
        res.status(404).end();
})

app.listen(port);