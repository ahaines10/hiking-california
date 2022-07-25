const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hikingSchema = new Schema({
    name: {
        type: String

    },
    location: {
        type: String

    },
    difficulty: {
        type: String,
        enum: ["beginner", "intermediate", "advanced"]

    },
    swimming: {
        type: Boolean 
        }

    })
    module.exports = mongoose.model('Hike', hikingSchema);