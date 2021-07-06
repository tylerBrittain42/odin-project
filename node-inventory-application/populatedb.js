#! /usr/bin/env node

console.log('This is a modified version of the mdn populate library script. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Game = require('./models/game')
var System = require('./models/system')
var CardPack = require('./models/cardPack')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var games = []
var systems = []
var cardPacks = []

function gameCreate(title, system, price, age_rating, cb) {
  gamedetail = {title:title, system:system, price:price, age_rating:age_rating}

  var game = new Game(gamedetail);
       
  game.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Game: ' + game);
    games.push(game)
    cb(null, game)
  }  );
}

function systemCreate(name, price, cb) {
  var system = new System({ name: name,price:price });
       
  system.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New system: ' + system);
    systems.push(system)
    cb(null, system);
  }   );
}

function cardPackCreate(name, franchise, price, count, cb) {
  cardPackDetail = { 
    name: name,
    franchise: franchise,
    price: price,
    count: count
  }
    
  var cardPack = new CardPack(cardPackDetail);    
  cardPack.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Pack: ' + cardPack);
    cardPacks.push(cardPack)
    cb(null, cardPack)
  }  );
}
function createGames(cb) {
    async.series([
        function(callback) {
          gameCreate('Super Mario Bros', 'Switch', 59.99,'E', callback);
        },
        function(callback) {
          gameCreate('Legend of Zelda', 'Switch', 39.99, 'E10', callback);
        },
        function(callback) {
          gameCreate('Halo 4', 'Xbox', 59.99, 'MA', callback);
        },
        function(callback) {
          gameCreate('Injustice 2', 'Xbox', 19.99, 'T', callback);
        },
        ],
        // optional callback
        cb);
}

// name: name,price:price
function createSystems(cb) {
    async.parallel([
        function(callback) {
          systemCreate('Switch', 299.99, callback);
        },
        function(callback) {
          systemCreate('Xbox', 399.99, callback);
        }
        ],
        // optional callback
        cb);
}

// name, franchise, price, count
function createCardPacks(cb) {
    async.parallel([
        function(callback) {
          cardPackCreate('Pearl', 'Pokemon', 3.99, 10, callback)
        },
        function(callback) {
          cardPackCreate('Wild Plains', 'Magic', 4.99, 12, callback)
        },
        function(callback) {
          cardPackCreate('Soul Silver', 'Pokemon', 3.99, 10, callback)
        },
      
        ],
        // Optional callback
        cb);
}



async.series([
    createGames,
    createSystems,
    createCardPacks
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('No error caught');
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



