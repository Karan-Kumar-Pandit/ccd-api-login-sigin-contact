const mongoose = require("./connection");
const validator = require("validator");

//----------------------------------------------------------------------

// Create Schema

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 20,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 20,
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
    age: {
        type: Number,
        required: true,
        trim: true,
        min: 15,
        max: 60,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
});

//----------------------------------------------------------------------

const UserModel = new mongoose.model("users", UserSchema);

module.exports = UserModel;
//---------------------------------------------------------------------------------------