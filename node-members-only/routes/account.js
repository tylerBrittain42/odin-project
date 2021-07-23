const express = require('express')
const router = express.Router()
const passport = require('passport')
const user_controller = require('../controllers/userController')

// Login route
router.get('/login', user_controller.get_login)
router.post('/login', passport.authenticate('local', {successRedirect:'/',failureRedirect:'login'}), user_controller.post_login);

// Logout route
router.get('/logout', user_controller.get_logout)

// Sign-up route
router.get('/sign-up', user_controller.get_sign_up)
router.post('/sign-up', user_controller.post_sign_up)

module.exports = router