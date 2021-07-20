const express = require('express')
const router = express.Router()

const message_controller = require('../controllers/messageController')

router.get('/', message_controller.feed)

module.exports = router