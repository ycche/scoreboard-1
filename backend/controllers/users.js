const connection = require ("../config/db")
const pool = connection.pool

module.exports.getUserHome = (async (req, res) => {
    const boards = await pool.query("select * from _ where _ = $1", [req.body.id])
    
})