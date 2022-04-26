require('dotenv').config();
const Pool = require('pg').Pool

module.exports.pool = new Pool({
    user : process.env.USER,
    password : process.env.PASSWORD,
    host : "db",
    database : process.env.DB,
}) // ...

