const passport = require('passport')
const validatePassword = require('../utils/passwordUtils').validatePassword
const LocalStrategy = require('passport-local').Strategy
const connection = require('db')
const Pool = connection.pool;

passport.use(new LocalStrategy(
    function(email, password, done){
        await Pool.query("SELECT * FROM users WHERE user_email = $1", [email]).then((user) => {
            if (user.rows.length === 0){
                return done(null,false)
            }
            const isValid = validatePassword(password,user.hash, user.salt)
            if (isValid){
                return done(null, user)
            } else{
                return done(null,false)
            }
        }).catch((err) => {
            done(err)
        })
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) =>{
    Pool.query("SELECT * FROM users WHERE id = $1", userId).then((user) => {
        done(null, user);
    })
    .catch(err => done(err))
})

module.exports = passport