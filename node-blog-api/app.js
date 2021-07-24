const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send('<h1>Temp index</h1>')
})




app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})