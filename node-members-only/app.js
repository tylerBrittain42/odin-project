const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const path = require('path')

const indexRouter = require('./routes/index')
const accountRouter = require('./routes/account')
const composeRouter = require('./routes/compose')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 

app.use(express.static("public"))

app.use('/', indexRouter);
app.use('/account', accountRouter)
app.use('/compose', composeRouter)


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})