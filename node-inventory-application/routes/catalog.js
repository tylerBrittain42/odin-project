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

// GET game update
router.get('/game/:id/update', game_controller.game_update_get);

// POST game update
router.post('/game/:id/update', game_controller.game_update_post);

// GET request for a single game
router.get('/game/:id', game_controller.game_detail);

// GET request for list of all games
router.post('/game/create', game_controller.game_list);


// --- SYSTEM ROUTES ---



// CARD PACK ROUTES