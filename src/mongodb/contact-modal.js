const mongoose = require("./connection");
const validator = require("validator");

//----------------------------------------------------------------------

// Create Schema

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Email id alredy present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        },
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
});

//----------------------------------------------------------------------

const ContactModel = new mongoose.model("contact-users", ContactSchema);

module.exports = ContactModel;
//---------------------------------------------------------------------------------------