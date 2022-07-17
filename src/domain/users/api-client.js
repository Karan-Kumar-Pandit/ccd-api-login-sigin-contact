const UserModel = require("../../mongodb/user-model");
const LoginModel = require("../../mongodb/login-modal");
const SignupModel = require("../../mongodb/signup-modal");
const ContactModel = require("../../mongodb/contact-modal");

// -----------------------------------------------------
// Users
// ------------------------------------------------------

async function countUsers() {
    const totalUsers = await UserModel.countDocuments();
    return totalUsers;
}

// ------------------------------------------------------
async function getUsers() {
    const users = await UserModel.find();
    return users;
}

// ------------------------------------------------------
async function getUserById(userId) {
    const user = await UserModel.find({ _id: userId });
    return user;
}

// ------------------------------------------------------
async function getUserByName(name) {
    const user = await UserModel.find({ username: name });
    return user;
}

// ------------------------------------------------------

async function createUsers(payload) {
    const _tempUserPaylod = {
        username: payload.username,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
        age: payload.age,
        address: payload.address,
    };

    const userModel = new UserModel(_tempUserPaylod);
    const dbResponse = await userModel.save();
    return dbResponse;
}

// ------------------------------------------------------

async function updateUser(payload, userId) {
    const _tempUserPaylod = {
        username: payload.username,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
        age: payload.age,
        address: payload.address,
    };
    const dbResponse = await UserModel.findByIdAndUpdate({ _id: userId },
        _tempUserPaylod, { new: true }
    );

    return dbResponse;
}

// ------------------------------------------------------

async function deleteUser(userId) {
    const dbResponse = await UserModel.findByIdAndDelete({ _id: userId });
    return dbResponse;
}

// ------------------------------------------------------

// Login
// ------------------------------------------------------
async function countLoginUsers() {
    const totalUsers = await LoginModel.countDocuments();
    return totalUsers;
}

// ------------------------------------------------------
async function getLoginUsers() {
    const users = await LoginModel.find();
    return users;
}

// ------------------------------------------------------
async function getLoginUserById(userId) {
    const user = await LoginModel.find({ _id: userId });
    return user;
}

// ------------------------------------------------------
async function getLoginUserByName(name) {
    const user = await LoginModel.find({ username: name });
    return user;
}

// ------------------------------------------------------

async function createLoginUsers(payload) {
    const _tempUserPaylod = {
        email: payload.email,
        password: payload.password,
    };

    const loginUserModel = new LoginModel(_tempUserPaylod);
    const dbResponse = await loginUserModel.save();
    return dbResponse;
}

// ------------------------------------------------------

async function updateLoginUser(payload, userId) {
    const _tempUserPaylod = {
        email: payload.email,
        password: payload.password,
    };
    const dbResponse = await LoginModel.findByIdAndUpdate({ _id: userId },
        _tempUserPaylod, { new: true }
    );

    return dbResponse;
}

// ------------------------------------------------------

async function deleteLoginUser(userId) {
    const dbResponse = await LoginModel.findByIdAndDelete({ _id: userId });
    return dbResponse;
}
// ------------------------------------------------------

// Signup
// ------------------------------------------------------
async function countSignupUsers() {
    const totalUsers = await SignupModel.countDocuments();
    return totalUsers;
}

// ------------------------------------------------------
async function getSignupUsers() {
    const users = await SignupModel.find();
    return users;
}

// ------------------------------------------------------
async function getSignupUserById(userId) {
    const user = await SignupModel.find({ _id: userId });
    return user;
}

// ------------------------------------------------------
async function getSignupUserByName(name) {
    const user = await SignupModel.find({ username: name });
    return user;
}

// ------------------------------------------------------

async function createSignupUser(payload) {
    const _tempUserPaylod = {
        fullName: payload.fullName,
        email: payload.email,
        password: payload.password,
    };

    const signupUserModel = new SignupModel(_tempUserPaylod);
    const dbResponse = await signupUserModel.save();
    return dbResponse;
}

// ------------------------------------------------------

async function updateSignupUser(payload, userId) {
    const _tempUserPaylod = {
        fullName: payload.fullName,
        email: payload.email,
        password: payload.password,
    };
    const dbResponse = await SignupModel.findByIdAndUpdate({ _id: userId },
        _tempUserPaylod, { new: true }
    );

    return dbResponse;
}

// ------------------------------------------------------

async function deleteSignuptUser(userId) {
    const dbResponse = await ContactModel.findByIdAndDelete({ _id: userId });
    return dbResponse;
}

// ------------------------------------------------------
// Contact
// ------------------------------------------------------
async function countContactUsers() {
    const totalUsers = await ContactModel.countDocuments();
    return totalUsers;
}

// ------------------------------------------------------
async function getContactUsers() {
    const users = await ContactModel.find();
    return users;
}

// ------------------------------------------------------
async function getContactById(userId) {
    const user = await ContactModel.find({ _id: userId });
    return user;
}

// ------------------------------------------------------
async function getContactByName(name) {
    const user = await ContactModel.find({ username: name });
    return user;
}

// ------------------------------------------------------

async function createContactUser(payload) {
    const _tempUserPaylod = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        city: payload.city,
        state: payload.state,
        message: payload.message,
    };

    const contactUserModel = new ContactModel(_tempUserPaylod);
    const dbResponse = await contactUserModel.save();
    return dbResponse;
}

// ------------------------------------------------------

async function updateContactUser(payload, userId) {
    const _tempUserPaylod = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        city: payload.city,
        state: payload.state,
        message: payload.message,
    };
    const dbResponse = await ContactModel.findByIdAndUpdate({ _id: userId },
        _tempUserPaylod, { new: true }
    );

    return dbResponse;
}
// ------------------------------------------------------

async function deleteContactUser(userId) {
    const dbResponse = await ContactModel.findByIdAndDelete({ _id: userId });
    return dbResponse;
}
// ------------------------------------------------------

module.exports = {
    countUsers,
    getUsers,
    getUserById,
    getUserByName,
    createUsers,
    updateUser,
    deleteUser,
    countLoginUsers,
    getLoginUsers,
    getLoginUserById,
    getLoginUserByName,
    createLoginUsers,
    updateLoginUser,
    deleteLoginUser,
    countSignupUsers,
    getSignupUsers,
    getSignupUserById,
    getSignupUserByName,
    createSignupUser,
    updateSignupUser,
    deleteSignuptUser,
    countContactUsers,
    getContactUsers,
    getContactById,
    getContactByName,
    createContactUser,
    updateContactUser,
    deleteContactUser,
};