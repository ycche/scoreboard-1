const passport = require('passport')
const validatePassword = require('../utils/passwordUtils').validatePassword
const LocalStrategy = require('passport-local').Strategy
const connection = require('./db')
const Pool = connection.pool;
const customFields = {
    usernameField : 'email',
    passwordField : 'password'
}
passport.use(new LocalStrategy( customFields, 
    async function(email, password, done){
        await Pool.query("SELECT * FROM users WHERE user_email = $1", [email]).then((user) => {
            if (user.rows.length === 0){
                return done(null,false)
            }
            const first = user.rows[0]
            const isValid = validatePassword(password,first.user_pass, first.user_salt)
            if (isValid){
                return done(null, {
                    id : first.user_id,
                })
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

passport.deserializeUser(async (userId, done) =>{
    await Pool.query("SELECT user_id FROM users WHERE user_id = $1", [userId]).then((user) => {
        const first = user.rows[0]
        done(null, first);
    })
    .catch(err => done(err))
})

module.exports = passport