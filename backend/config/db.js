const Pool = require('pg').Pool

module.exports.pool = new Pool({
    user : "postgres",
    password : "Pandorieen7076",
    host : "localhost",
    port : "5432",
    database : "scoreboard"
}) // ...

