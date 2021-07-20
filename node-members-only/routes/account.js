const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/userController')

// Login route
router.get('/login', user_controller.get_login)
router.post('/login', user_controller.post_login)

// Sign-up route
router.get('/sign-up', user_controller.get_sign_up)
router.post('/sign-up', user_controller.post_sign_up)


// Upgrade route
router.get('/upgrade', user_controller.get_upgrade)
router.post('/upgrade', user_controller.post_upgrade)

module.exports = router