const credentials = require("./credentials.json");
const mysql = require("mysql");

class Database {
    constructor() {
        this.connection = mysql.createConnection(credentials);
    }

    // TODO: error handling
    async query(sql_string, args=[]) {
        let connection = this.connection;
        return new Promise (function(resolve, reject) {
            connection.query(sql_string, args, function(err, result, fields) {
                // if (err) throw err;
                resolve({ result, fields });
            });
        });
    } 
}

module.exports = Database;