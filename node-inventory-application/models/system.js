const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SystemSchema = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
    }
);

SystemSchema
.virtual('url')
.get(function() {
    return('/catalog/system/' + this._id)
});

module.exports = mongoose.model('System', SystemSchema);