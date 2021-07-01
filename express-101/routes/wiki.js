const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Wiki home page')
})

router.get('/about', (req, res) => {
    res.send('About this wiki')
})

// this is an example of using route parameters
router.get('/test/:lmao',(req,res) => {
    // lmao is stored as req.params.lmao
    console.log(req.params.lmao)
    res.sendStatus(200)
})

module.exports = router;