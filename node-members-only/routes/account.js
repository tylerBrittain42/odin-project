const express = require('express')
const router = express.Router()
const passport = require('passport')
const Account = require('../models/user')

const user_controller = require('../controllers/userController')

// Login route
router.get('/login', user_controller.get_login)
router.post('/login', (req, res) => passport.authenticate('local', { successRedirect: '/register', failureRedirect: 'login', })(req, res));


// Logout route
router.get('/logout', (req, res) => {res.redirect('../../')})

// Sign-up route
router.get('/sign-up', user_controller.get_sign_up)
router.post('/sign-up', function(req, res) {
    Account.register(new Account({ username : req.body.username, password:req.body.password }), req.body.password, function(err, account) {
        if (err) {
            console.log(err)
            return res.render('sign-up', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
          console.log(`User ${req.body.username} registered`)
          res.redirect('/');
        });
    });
  });


// Upgrade route
router.get('/upgrade', user_controller.get_upgrade)
router.post('/upgrade', user_controller.post_upgrade)

module.exports = router