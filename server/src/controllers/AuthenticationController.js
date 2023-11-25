const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require("bcrypt")


function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

async function hashPassword (password) {

    return bcrypt.hash(password, 10)

}

module.exports = {

    async register (req, res) {
        try {
            const {email, password} = req.body
            const newPass = await hashPassword(password)
            const user = await User.create( { email: email, password: newPass })
            console.log("REGISTER: The hashed pass is" + newPass)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }  
            })

            if(!user) {
                return res.status(403).send({
                    error: 'The login information was hella incorrect'
                })
            }
            
            const isPasswordValid =  await bcrypt.compare(password, user.password)
            console.log("LOGIN: Inputted Password to be compared is " + password)
            console.log("LOGIN: RETRIEVED Password is " + user.password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was hella incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'Error occured attempting to log in.'
            })
        }
    }
}