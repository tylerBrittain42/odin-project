const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardPackSchema = new Schema(
    {
        name: {type: String, required: true},
        franchise: {type: String, required: true},
        price: {type: Number, required: true},
        count: {type: String}
    }
);

CardPackSchema
.virtual('url')
.get(function() {
    return('/catalog/cardpack/' + this._id)
});

module.exports = mongoose.model('CardPack', CardPackSchema);