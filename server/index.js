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

app.get('/getSloScore/:uuid', async (req, res) => {
    let uuid = req.params.uuid;
    let { result } = await db.query("SELECT slo_score AS sloScore FROM user_assignments WHERE user_uuid=? AND assignment_id=1 LIMIT 1;", [uuid]);
    console.log(result[0]);
    if (result[0] !== undefined)
        res.status(200).json(result[0]).end();
    else
        res.status(404).end();
});

app.get('/getUserAssignmentCompletion/:uuid/:aid', async (req, res) => {
    let uuid = req.params.uuid;
    let aid = req.params.aid;
    let {result} = await db.query("SELECT problem1, problem2 FROM user_assignments WHERE user_uuid=? AND assignment_id=? LIMIT 1;", [uuid, aid]);
    console.log(result);
    if (result !== undefined)
        res.status(200).json(result[0]).end();
    else
        res.status(404).end();
});

app.post('/updateUserAssignmentCompletion/:uuid/:aid/:problem', async (req, res) => {
    let uuid = req.params.uuid;
    let aid = req.params.aid;
    let p = req.params.problem;
    let result = undefined;
    if (p == 1)
        result = await db.query("UPDATE user_assignments SET problem1=1 WHERE user_uuid=? AND assignment_id=? LIMIT 1;", [uuid, aid]);
    else if (p == 2)
        result = await db.query("UPDATE user_assignments SET problem2=1 WHERE user_uuid=? AND assignment_id=? LIMIT 1;", [uuid, aid]);
    console.log(result);
    if (result !== undefined)
        res.status(200).json(result[0]).end();
    else
        res.status(404).end();
});

app.get('/resetUserAssignments', async (req, res) => {
    let result = await db.query("UPDATE user_assignments SET slo_score='-1', problem1=0, problem2=0");
    console.log(result);
    if (result !== undefined)
        res.send("Reset complete").end();
    else
        res.status(404).end();
});

app.post('/postSLOscore', async (req, res) => {
    let uuid = req.body.uuid;
    let SLOscore = req.body.sloScore;
    let { result } = await db.query("UPDATE user_assignments SET slo_score=? WHERE user_uuid=? AND assignment_id=1 LIMIT 1",
        [SLOscore, uuid]);
    console.log(result);
    if (result !== undefined)
        res.status(200).json(result[0]).end();
    else
        res.status(404).end();
});

//Don't add any functions below this line
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