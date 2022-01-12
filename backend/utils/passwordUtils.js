const crypto = require('crypto')

export function genPassword(pw){
    var salt = crypto.randomBytes(32).toString('hex')
    var hash = crypto.pbkdf2Sync(pw, salt, 10000, 64, 'sha512').toString('hex')

    return {
        salt : salt,
        hash : hash
    }
}

export function validatePassword(pw, hash, salt){
    var hashVerify = crypto.pbkdf2Sync(pw, salt, 10000, 64, 'sha512').toString('hex')
    return hash === hashVerify
}