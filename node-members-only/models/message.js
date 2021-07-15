const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        title: {type: String, required: true},
        body: {type: String, required: true},
        author: {type: String, required: true},
        timestamp: {type: Date, required: true}

    }
);

module.exports = mongoose.model('Message', MessageSchema);

