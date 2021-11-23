const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;


const Database = require('./Database');

var db = new Database();

app.use(cors());
app.use(express.json());

app.get('/test-database', async (req, res) => {
    let { result } = await db.query("SELECT 'Hello World!' AS message");
    console.log(result);
    res.send(result[0].message);
});

app.get('/express-backend', (req, res) => {
    res.send("EXPRESS BACKEND");
});

app.post('/getLogin', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let { result } = await db.query('SELECT uuid FROM users WHERE email=? && password=? LIMIT 1;', [username, password]);
    console.log(result[0]);
    if (result[0] !== undefined)
        res.status(200).json(result[0]).end();
    else
        res.status(404).end();
});

app.get('/getUserData/:uuid', async (req, res) => {
    let uuid = req.params.uuid;
    let { result } = await db.query("SELECT email, username FROM users WHERE uuid=? LIMIT 1;", [uuid]);
    console.log(result[0]);
    if (result[0] !== undefined)
        res.status(200).json(result[0]).end();
    else
        res.status(404).end();
});

if (process.env.NODE_ENV === undefined || process.env.NODE_ENV.trimEnd() !== 'dev') { // For production build
    console.log("Using production build");
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    });
}

app.listen(port, () => {
    console.log("Express server started on %d", port);
});