const { default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: String,
    rating: String,
}, {
    timestamps: true
})

const movieModle = mongoose.model('movieModel', movieSchema);

module.exports = movieModle;