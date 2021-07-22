const passport = require('passport')
const User = require('../models/user')

exports.get_login = function(req, res) {
    res.render('login')
}

exports.post_login = function(req, res) {
    res.send('<h1>Login post request recieved</h1>')
}

exports.get_sign_up = function(req, res) {
    res.render('sign-up')
}

exports.post_sign_up = function(req, res) {

    // const user = new User(
    // {
    //     username:req.body.username,
    //     password:req.body.password,
    //     membership:'default'
    // })
    // user.save((e) => {
    //     if(e) {res.json({'error':e})}
    //     else{
    //         console.log('registration success!')
    //         res.redirect('../../')
    //     }
    // })


    

}

exports.get_upgrade = function(req, res) {
    res.render('passcode')
}

exports.post_upgrade = function(req, res) {
    res.send('<h1> Passcode post recieved</h1>')
}