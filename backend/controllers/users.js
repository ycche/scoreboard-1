const { prototype } = require("express-session/session/cookie")
const connection = require ("../config/db")
const pool = connection.pool

module.exports.getUserID = (async (req, res) => {
    res.json(req.user.user_id)
})

module.exports.getUserName =  (async (req, res) => {
    const data = await pool.query("select user_email from users where user_id = $1", [req.user.user_id])
    res.json(data.rows)
})

module.exports.getUserHome = (async (req, res) => {
    const boards = await pool.query("select * from boards where user_id = $1", [req.user.user_id])
    res.json(boards.rows)
        
})
// Refresh page after add/delete/update so boards can be sorted appropriately.
module.exports.addBoard = (async (req, res) => {
    const query = await pool.query("insert into boards (user_id, board_name, board_type, board_priority) values ($1, $2, 1, 1)",
    [req.user.user_id, req.body.name]).then(() => {
        console.log("Success")
        res.send("Successful Added Board")
    }).catch(() => {
        console.log("failure")
        res.send("Unsuccessful Add")
    })
})

module.exports.deleteBoard = (async (req, res) => {
    const query = await pool.query("delete from boards where board_id = $1", [req.body.id]).then(() => {
        res.send("Successful Deleted Board : " + req.body.id)
        console.log(req.body.id)
    }).catch(() => {
        res.send("Unsuccessful Delete")
        console.log("failure")
    })
})

module.exports.updateBoard = (async (req, res) => {
    const query = await pool.query("update boards set board_name = $1, board_priority = $2 where board_id = $3", 
    [req.body.name, req.body.priority, req.body.id]).then(() => {
        console.log("Update Successful")
    }).catch(() => {
        console.log("Update Failed")
    })
})