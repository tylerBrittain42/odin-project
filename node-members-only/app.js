//  USING THE FOLLOWING LINK
// https://mherman.org/blog/user-authentication-with-passport-dot-js/#setup
const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require("express-session");

const indexRouter = require('./routes/index')
const accountRouter = require('./routes/account')
const composeRouter = require('./routes/compose')

const app = express()
const port = 3000

// connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/members-only',   {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 

app.use(express.static("public"))

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/user')
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/compose', composeRouter);




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})