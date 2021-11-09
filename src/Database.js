// TODO: This won't be hard-coded eventually, maybe an environment var?
const DATABASE_API = "http://localhost:3001";

// Promise that sends username and password to database and 
// returns UUID if found (returns undefined otherwise)
async function login(username, password) {
    return await fetch(DATABASE_API + "/login", {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => response.json())
    .then(response => response.uuid);
}

export { login }