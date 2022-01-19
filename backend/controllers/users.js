const connection = require ("../config/db")
const pool = connection.pool

module.exports.getUserHome = (async (req, res) => {
    const boards = await pool.query("select * from boards where user_id = $1", [req.body.id])
    
})
// Refresh page after add/delete/update so boards can be sorted appropriately.
module.exports.addBoard = (async (req, res) => {
    const query = await pool.query("insert into boards (user_id, board_name, board_type, board_priority) values ($1, $2, $3, $4)",
    [req.id, req.name, req.type, req.priority])
})

module.exports.deleteBoard = (async (req, res) => {
    const query = await pool.query("delete from boards where board_id = $1", [req.body.id])
})

module.exports.updateBoard = (async (req,req) => {
    const query = await pool.query("update boards set (board_name = $1, board_priority = $2) where board_id = $3", 
    [req.body.name, req.body.priority, req.body.id])
})