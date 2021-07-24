const express = require('express')
const mongoose = require('mongoose')

const entriesRouter = require('./routes/entries')

const app = express()
const port = 3000





app.use('/entries', entriesRouter)


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})