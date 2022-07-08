const UserModel = require("../../mongodb/user-model");

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

module.exports = {
    countUsers,
    getUsers,
    getUserById,
    getUserByName,
    createUsers,
    updateUser,
    deleteUser,
};