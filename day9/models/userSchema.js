const { default: mongoose } = require("mongoose");

// column names
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    terms: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

// table name
const userModel = mongoose.model('userModel', userSchema);

// export the model
module.exports = userModel;