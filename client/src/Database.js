// Promise that sends username and password to database and 
// returns UUID if found (returns undefined otherwise)
async function login(username, password) {
    return await fetch("/getLogin", {
        method: 'POST',
        //mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(async (response) => {
        if (response.status === 200) {
            console.log(response)
            let result = await response.json();
            return result.uuid;
        } else
            return undefined;
    });
}

async function getUserData(uuid) {
    return await fetch("/getUserData/" + uuid, {
        method: 'GET'
    }).then(async (response) => {
        if (response.status === 200) {
            console.log(response)
            let result = await response.json();
            return result;
        } else
            return undefined;
    });
}

async function getSloScore(uuid) {
    return await fetch("/getSloScore/" + uuid, {
        method: 'GET'
    }).then(async (response) => {
        if (response.status === 200) {
            console.log(response)
            let result = await response.json();
            console.log(result.sloScore);
            return result.sloScore;
        } else
            return undefined;
    });
}

async function setSLOscore(uuid, sloScore) {
    return await fetch("/postSLOscore", {
        method: 'POST',
        //mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            uuid: uuid,
            sloScore: sloScore
        })
    }).then(async (response) => {
        if (response.status === 200) {
            console.log(response);
            return true;
        } else
            return undefined;
    });
}

async function getUserAssignmentCompletion(uuid, assignmentID) {
    return await fetch("/getUserAssignmentCompletion/" + uuid + "/" + assignmentID, {
        method: "GET",
    }).then(async (response) => {
        if (response.status === 200) {
            console.log(response)
            let result = await response.json();
            return result;
        } else
            return undefined;
    });
}

async function updateUserAssignmentCompletion(uuid, assignmentID, problem) {
    return await fetch("/updateUserAssignmentCompletion/" + uuid + "/" + assignmentID + "/" + problem, {
        method: 'POST',
    }).then(async (response) => {
        if (response.status === 200) {
            console.log(response)
            return true;
        } else
            return false;
    });
}


export {login, getUserData, getSloScore, setSLOscore, getUserAssignmentCompletion, updateUserAssignmentCompletion}