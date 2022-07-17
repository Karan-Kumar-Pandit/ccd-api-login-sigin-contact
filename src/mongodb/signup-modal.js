const mongoose = require("./connection");
const validator = require("validator");

//----------------------------------------------------------------------

// Create Schema

const SignupSchema = new mongoose.Schema({
    fullName: {
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
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 10,
    },
});

//----------------------------------------------------------------------

const SignupModel = new mongoose.model("signup-users", SignupSchema);

module.exports = SignupModel;
//---------------------------------------------------------------------------------------