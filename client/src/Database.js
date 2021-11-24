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
        }
        else
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
        }
        else
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
        }
        else
            return undefined;
    });
}


export { login, getUserData, getSloScore }