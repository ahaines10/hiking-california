const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      match: /.{10,}/
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    // Automatic createdAt & updatedAt properties
    timestamps: true
  });
  
const hikingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,

    },
    location: {
        type: String,
        required: true

    },
    difficulty: {
        type: String,
        required: true,
        enum: ["beginner", "intermediate", "advanced"]

    },
    swimming: {
        type: Boolean,
        default: false
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    reviews: [reviewSchema]
    
})

module.exports = mongoose.model('Hike', hikingSchema);