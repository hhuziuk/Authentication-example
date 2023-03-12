const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const controller = require("./PostController.js")
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration', [
    check('username', 'field can not be empty').notEmpty(),
    check('password', '5 < password < 10').isLength({min: 5, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER', 'ADMIN']), controller.getUsers)

module.exports = router