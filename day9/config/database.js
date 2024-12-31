const { default: mongoose } = require("mongoose");


// Database url from mongodb atlat
mongoose.connect('mongodb+srv://rw6dhavalpl:12345@cluster0.5ozdi.mongodb.net/user')

// db instans of mongoose connection.
const db = mongoose.connection;

// connecting to database
// if there is any error then print the error
// else print the success message
db.on('connected', (err) => {
    if (!err) {
       return console.log("Database successfully connected");
    }
    console.log(err);    
})

module.exports = db;