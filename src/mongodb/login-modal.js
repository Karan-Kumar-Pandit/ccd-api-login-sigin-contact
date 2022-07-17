const mongoose = require("./connection");
const validator = require("validator");

//----------------------------------------------------------------------

// Create Schema

const LoginSchema = new mongoose.Schema({
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

const LoginModel = new mongoose.model("login-users", LoginSchema);

module.exports = LoginModel;
//---------------------------------------------------------------------------------------