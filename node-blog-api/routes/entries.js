const entriesController = require('../controllers/entriesController')
const express = require('express')
const passport = require('passport')
const router = express.Router()


// routes for default pathway
router.get('/', passport.authenticate('jwt', {session:false}), entriesController.all_entries)
router.post('/', passport.authenticate('jwt', {session:false}), entriesController.add_entry)
router.delete('/', passport.authenticate('jwt', {session:false}), entriesController.clear_blog)

// routes for a specific post
router.get('/:messageID', passport.authenticate('jwt', {session:false}), entriesController.get_post)
router.delete('/:messageID', passport.authenticate('jwt', {session:false}), entriesController.delete_entry)


module.exports = router