const express = require('express')

const { registerUser, loginUser } = require('../controllers/userController')

const router = express.Router()

//? Login user
router.post('/login', loginUser)

//?Sign up user
router.post('/register', registerUser)

module.exports = router
