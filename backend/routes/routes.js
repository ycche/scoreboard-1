const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')
const loginControllers = require('../controllers/login')
const passport = require('../config/passport').passport

router.post('/register', loginControllers.registerAccount)
router.post('/login', passport.authenticate('local', {failure: 'login-failure', success: 'login-success'}))
router.get('/home', controllers.HomePage)

module.exports = router