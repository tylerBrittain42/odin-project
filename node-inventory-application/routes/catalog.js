const express = require('express');
const router = express.Router();

const game_controller = require('../controllers/gameController');
const system_controller = require('../controllers/systemController');
const cardPack_controller = require('../controllers/cardPackController');

// --- GAME ROUTES ---

// Home page
router.get('/', game_controller.game_index);

// GET game creation
router.get('/game/create', game_controller.game_create_get);

// POST game creation
router.post('/game/create', game_controller.game_create_post);

// GET game deletion
router.get('/game/:id/delete', game_controller.game_delete_get);

// POST game deletion
router.post('/game/:id/delete', game_controller.game_delete_post);

// GET request for a single game
router.get('/game/:id', game_controller.game_detail);

// GET request for list of all games
router.get('/games', game_controller.game_list);


// --- SYSTEM ROUTES ---

// GET system creation
router.get('/system/create', system_controller.system_create_get);

// POST system creation
router.post('/system/create', system_controller.system_create_post);

// GET system deletion
router.get('/system/:id/delete', system_controller.system_delete_get);

// POST system deletion
router.post('/system/:id/delete', system_controller.system_delete_post);

// GET request for a single system
router.get('/system/:id', system_controller.system_detail);

// GET request for list of all systems
router.get('/systems', system_controller.system_list);


// --- CARD PACK ROUTES --- 

// GET cardPack creation
router.get('/cardPack/create', cardPack_controller.cardPack_create_get);

// POST cardPack creation
router.post('/cardPack/create', cardPack_controller.cardPack_create_post);

// GET cardPack deletion
router.get('/cardPack/:id/delete', cardPack_controller.cardPack_delete_get);

// POST cardPack deletion
router.post('/cardPack/:id/delete', cardPack_controller.cardPack_delete_post);

// GET request for a single cardPack
router.get('/cardPack/:id', cardPack_controller.cardPack_detail);

// GET request for list of all cardPacks
router.get('/cardPacks', cardPack_controller.cardPack_list);

module.exports = router;