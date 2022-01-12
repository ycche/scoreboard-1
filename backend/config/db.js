const Pool = require('pg').Pool

export const pool = new Pool({
    user : "Postgres",
    password : " ",
    host : "localhost",
    port : "5000",
    database : "Scoreboard"
}) // ...

