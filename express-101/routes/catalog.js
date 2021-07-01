const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('catalog homepage')
})

router.get('/:objects', (req, res) =>{
    res.send(req.params.objects + ' page')
})

router.get('/:object/create', (req, res) => {
    const info = req.params
    res.send(`Page for ${info.object} CREATION`)
})


router.get('/:object/:id', (req, res) => {
    const info = req.params
    res.send(`Page for ${info.object} and ${info.id} `)
})

router.get('/:object/:id/update', (req, res) => {
    const info = req.params
    res.send(`Page for ${info.object} and ${info.id} UPDATES `)
})

router.get('/:object/:id/delete', (req, res) => {
    const info = req.params
    res.send(`Page for ${info.object} and ${info.id} DELETE`)
})


module.exports = router;