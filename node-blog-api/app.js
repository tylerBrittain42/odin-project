const express = require('express')
const mongoose = require('mongoose')
const entriesRouter = require('./routes/entries')

const app = express()
const port = 3000

// connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/blog-api',   {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);



// Various middleware
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json()) 
// app.use(express.static("public"))


app.use('/entries', entriesRouter)


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})