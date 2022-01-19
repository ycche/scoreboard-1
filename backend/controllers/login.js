const crypto = require('crypto')
const genPass = require('../utils/passwordUtils').genPassword
const connection = require ("../config/db")
const pool = connection.pool

module.exports.registerAccount = (async (req,res) =>{
    console.log(req.body.email)
    console.log(req.body.password)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1",[req.body.email])
    if (user.rows.length !== 0){
        return res.status(401).json("There already exists a user with that e-mail.")
    }
    const salthash = genPass(req.body.password)
    const salt = salthash.salt
    const hash = salthash.hash

    const newUser = await pool.query("INSERT INTO users (user_email, user_salt, user_pass) VALUES ($1,$2,$3)",[req.body.email, salt, hash])
    res.redirect('/')
})

module.exports.loginSendData = (async (req,res) => {
    res.send(req.user)
})