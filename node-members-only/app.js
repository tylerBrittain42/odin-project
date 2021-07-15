const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // for parsing application/json

app.use(express.static("public"));

//temporarily using primary index for creating views
app.get('/', (req, res) => {
    res.render('compose')
})

app.post('/', (req, res) =>{
    console.log(req.body)
    res.send('<h1>received</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})