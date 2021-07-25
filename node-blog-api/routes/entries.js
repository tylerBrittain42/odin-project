const entriesController = require('../controllers/entriesController')
const express = require('express')
const router = express.Router()


// routes for default pathway
router.get('/', entriesController.all_entries)
router.post('/', entriesController.add_entry)
router.delete('/', entriesController.clear_blog)

// routes for a specific post
router.get('/:messageID', entriesController.get_post)
router.delete('/:messageID', entriesController.delete_entry)


module.exports = router