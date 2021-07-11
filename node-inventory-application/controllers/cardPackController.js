const CardPack = require('../models/cardPack');

const { body,validationResult } = require('express-validator');


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
    res.render('cardPack_form')
}

exports.cardPack_create_post = [
    
    body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('franchise', 'Franchise must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('count', 'Count must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('price', 'Price must not be empty.').trim().isLength({ min: 1 }).escape(),

    (req, res, next) => {

        const errors = validationResult(req);

        const cardPack = new CardPack(
            {
                name: req.body.name,
                franchise: req.body.franchise,
                count: req.body.count,
                price: req.body.count
            }
        )

        if (!errors.isEmpty()) { res.render('cardPack_form') }
        else{
            cardPack.save((e) => {
                if(e) { return next(e) }
                res.redirect(cardPack.url)
            })
        }


    }


]

exports.cardPack_delete_get = (req, res) => {
    CardPack.findById(req.params.id)
    .exec((e, cardPack_details) => {
        if(e) { return e}
        res.render('cardPack_delete', {pack: cardPack_details})
    })
}

exports.cardPack_delete_post = (req, res) => {
    CardPack.findByIdAndRemove(req.body.id.substring(0,req.body.id.length - 1 ), function deleteCardPack(e) {
        if(e) { return({'error':e})}
        res.redirect('../../../catalog/cardPacks')
    })
}

