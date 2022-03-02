const Pool = require('pg').Pool

module.exports.pool = new Pool({
    user : process.env.USER,
    password : process.env.PASSWORD,
    host : "localhost",
    port : "5432",
    database : process.env.DB
}) // ...

