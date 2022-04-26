const express = require('express')
const router = express.Router()
const loginControllers = require('../controllers/login')
const userControllers = require('../controllers/users')
const passport = require('passport')

const isAuth = ((req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(401).json({msg : 'Not authorized'})
    }
})

router.post('/register', loginControllers.registerAccount)
router.post('/login', passport.authenticate('local', {failure: 'login-failure', success: 'login-success'}), loginControllers.loginSendData)

router.get('/auth', isAuth)
//User Routes (Look into protected routes)

router.get('/user/id', isAuth, userControllers.getUserID)
router.get('/user', isAuth, userControllers.getUserHome)
router.get('/user/name', isAuth, userControllers.getUserName)
router.post('/user/board/add', isAuth, userControllers.addBoard)
router.put('/user/board/update', isAuth, userControllers.updateBoard)
router.delete('/user/board/delete', isAuth, userControllers.deleteBoard)



module.exports = router