const { default: mongoose } = require("mongoose")

require('dotenv').config();

let url = process.env.DB_URL;

const db = async () => {
    try {
        console.log(url);
        await mongoose.connect(url);
        console.log("Database connected.");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = db;