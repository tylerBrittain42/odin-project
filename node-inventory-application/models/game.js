const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema(
    {
        title: {type: String, required: true},
        system: {type: String, required: true},
        price: {type: Number, required: true},
        age_rating: {type: String}
    }
);

GameSchema
.virtual('url')
.get(() => {
    return('/catalog/game/' + this._id)
});

module.exports = mongoose.model('Game', GameSchema);