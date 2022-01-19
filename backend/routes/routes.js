const express = require('express')
const router = express.Router()
const loginControllers = require('../controllers/login')
const passport = require('passport')

router.post('/register', loginControllers.registerAccount)
router.post('/login', passport.authenticate('local', {failure: 'login-failure', success: 'login-success'}), loginControllers.loginSendData)

module.exports = router