const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntrySchema = new Schema(
    {
        title: {type: String, required: true},
        body: {type: String, required: true},
        timestamp: {type: Date, default: Date.now}
    }
)

module.exports = mongoose.model('Entry', EntrySchema)