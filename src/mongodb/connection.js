const mongoose = require("mongoose");

// ------------------------------------------------------

const mongoDbServerPath = "mongodb://localhost:27017/ccd";

mongoose
    .connect(mongoDbServerPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("//--------------------------------------");
        console.log("Mongo DB connected successfully...");
        console.log("//--------------------------------------");
    })
    .catch((errors) => {
        console.log(errors);
    });

// --------------------------------------------------------
module.exports = mongoose;
// --------------------------------------------------------