const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardPackSchema = new Schema(
    {
        title: {type: String, required: true},
        system: {type: String, required: true},
        price: {type: Number, required: true},
        age_rating: {type: String}
    }
)