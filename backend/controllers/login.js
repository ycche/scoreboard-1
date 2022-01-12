const crypto = require('crypto')
const genPass = require('../utils/passwordUtils').genPassword
const connection = require ("../config/db")
const pool = connection.pool


module.exports.manualLogin((req,res) => {
    const {email, password} = req.body;
    const account = await pool.query(
        "SELECT * FROM accounts WHERE account_email = $1", [email]
    )
    if (account.rows.length === 0){
        return res.status(401).json("Invalid Credential")
    }

})

export const registerAccount = ((req,res) =>{
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1",[req.email])
    if (user.rows.length !== 0){
        return res.status(401).json("There already exists a user with that e-mail.")
    }
    const hash = genPass(req.body.password)
    const salt = hash.salt
    const hash = hash.hash

    const newUser = await pool.query("INSERT INTO users (user_email, user_salt, user_pass) VALUES ($1,$2,$3)",[req.email, salt, hash])
    res.redirect('/login')

})
