const passport = require('passport')
const Account = require('../models/user')

exports.get_login = function(req, res) {
    res.render('login')
}

exports.post_login = function(req, res) {
    res.redirect('/');
}

exports.get_logout = function(req, res) {
    req.logout()
    res.redirect('/')
}

exports.get_sign_up = function(req, res) {
    res.render('sign-up')
}

exports.post_sign_up = function(req, res) {

    Account.register(new Account({ username : req.body.username}), req.body.password, function(err, account) {
        if (err) {
            return res.render('sign-up', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
          console.log(`User ${req.body.username} registered`)
          res.redirect('/');
        });
    });
}