const Game = require('../models/game');
const System = require('../models/system')
const CardPack = require('../models/cardPack');

const async = require('async');


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

exports.game_list = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.game_detail = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.game_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.game_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.game_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.game_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.game_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}

exports.game_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED')
}