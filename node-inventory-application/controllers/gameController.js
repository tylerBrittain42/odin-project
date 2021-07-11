const Game = require('../models/game');
const System = require('../models/system')
const CardPack = require('../models/cardPack');

const async = require('async');
const { body,validationResult } = require('express-validator');


exports.game_index = (req, res) => {

    async.parallel({
        game_count: function(callback) {
            Game.countDocuments({}, callback); 
        },
        system_count: function(callback) {
            System.countDocuments({}, callback);
        },
        cardPack_count: function(callback){
            CardPack.countDocuments({},callback)
        }


    }, (err, results) => { 
        res.render('index', {data: results});
    })
}

exports.game_list = (req, res, next) => {

    Game.find({}, 'title system')
        .exec((e, list_games) => {
            if(e) { return next(e) }
            res.render('game_list', {inventory:list_games})
        })
    


}

exports.game_detail = (req, res, next) => {
    Game.findById(req.params.id)
    .exec((e, game_details) => {
        if(e) { return(next(e)) }
        res.render('game_detail', {game:game_details})
    })
}

exports.game_create_get = (req, res) => {
    res.render('game_form')
}

exports.game_create_post = [

    body('title', 'Title must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('price', 'Price must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('system').escape(),
    (req, res, next) => {

        const errors = validationResult(req);

        const game = new Game(
            {
                title: req.body.title,
                price: req.body.price,
                system: req.body.system,
                age_rating: req.body.AgeRating
            }
        );

        if (!errors.isEmpty()) { res.render('game_form', {errors: errors}) }
        else{
            game.save((e) => {
                if(e) { return next(e) }
                res.redirect(game.url)
            })
        }
}
]

exports.game_delete_get = (req, res) => {
    Game.findById(req.params.id)
    .exec((e, game_details) => {
        if(e) { return(next(e)) }
        res.render('game_delete', {game:game_details})
    })
}

exports.game_delete_post = (req, res) => {
    console.log(req.body)
    Game.findByIdAndRemove(req.body.id.substring(0,req.body.id.length - 1 ), function deleteGame(e) {
        if(e) { return({'error':e})}
        res.redirect('../../../catalog/games')
    })
}

