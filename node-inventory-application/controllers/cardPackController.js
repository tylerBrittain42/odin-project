const CardPack = require('../models/cardPack');

exports.cardPack_list = (req, res) => {
    CardPack.find({},'name franchise')
        .exec((e, list_cardPacks) => {
            if(e) { res.json({'error':e})}
            res.render('cardPack_list', {inventory:list_cardPacks})
        })
}

exports.cardPack_detail = (req, res) => {
    CardPack.findById(req.params.id)
    .exec((e, cardPack_details) => { 
        if(e) { res.json({'error':e})}
        res.render('cardPack_detail', {pack: cardPack_details})
    })
}

exports.cardPack_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.cardPack_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.cardPack_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.cardPack_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.cardPack_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.cardPack_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}