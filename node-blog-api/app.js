const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const entriesRouter = require('./routes/entries')
const { options } = require('./routes/entries')

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

app.get('/login', (req, res) => {
    res.send('login request received')
})

// NOTE: For now we are hardcoding login information
// This will be changed
app.post('/login', (req,res) =>{

    const user = req.query.email
    const userPW = req.query.password

    if(user === 'correct@email.com'){
        if(userPW === 'pass'){
            console.log('yes')
            const secret = 'This is the secret key'
            const token = jwt.sign({user}, secret, {expiresIn: '30s'})
            return res.status(200).json({
                message: "auth passed",
                token
            })
    }}
    
    return res.status(401).json({ message: "Auth Failed" })




    res.send('login post recieved')
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})