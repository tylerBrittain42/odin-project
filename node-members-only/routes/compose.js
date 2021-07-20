const express = require('express')
const router = express.Router()

const message_controller = require('../controllers/messageController')

router.get('/', message_controller.get_compose)
router.post('/', message_controller.post_compose)

module.exports = router