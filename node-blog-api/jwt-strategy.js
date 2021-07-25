const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'This is the secret key'; //normally store this in process.env.secret

module.exports = new JwtStrategy(opts, (jwt_payload, done) => {
    if (jwt_payload.user === "correct@email.com") {
        return done(null, true)
    }
    else {
        console.log(jwt_payload)
    }
    return done(null, false)
}) 