const Express = require("express");

const UsersRoutes = Express.Router();

const ResponseHandler = require("../helpers/response-handler");

const UserAPIClient = require("../domain/users/api-client");

// ------------------------------------------------------

UsersRoutes.get("/total-users", function(Request, Response) {
    UserAPIClient.countUsers()
        .then((value) => {
            let response = ResponseHandler.success(
                value,
                "User counting successfully."
            );
            Response.send(response);
        })
        .catch((error) => {
            let response = ResponseHandler.error(error, "User counting failed.");
            Response.send(response);
        });
});

// ------------------------------------------------------

UsersRoutes.get("/users", function(Request, Response) {
    UserAPIClient.getUsers()
        .then((value) => {
            let response = ResponseHandler.success(value, "User get successfully.");
            Response.send(response);
        })
        .catch((error) => {
            let response = ResponseHandler.error(error, "User get failed.");
            Response.send(response);
        });
});

// ------------------------------------------------------

UsersRoutes.get("/user/:userId", function(Request, Response) {
    const userId = Request.params.userId;
    UserAPIClient.getUserById(userId)
        .then((value) => {
            let response = ResponseHandler.success(value, "User get successfully.");
            Response.send(response);
        })
        .catch((error) => {
            let response = ResponseHandler.error(error, "User get failed.");
            Response.send(response);
        });
});

// ------------------------------------------------------

UsersRoutes.get("/user/name/:userName", function(Request, Response) {
    const userName = Request.params.userName;
    UserAPIClient.getUserByName(userName)
        .then((value) => {
            let response = ResponseHandler.success(value, "User get successfully.");
            Response.send(response);
        })
        .catch((error) => {
            let response = ResponseHandler.error(error, "User get failed.");
            Response.send(response);
        });
});

// ---------------------------------------------------
UsersRoutes.post("/users", function(Request, Response) {
    const payload = Request.body;

    UserAPIClient.createUsers(payload)
        .then((value) => {
            let response = ResponseHandler.success(
                value,
                "User created successfully."
            );
            Response.send(response);
        })
        .catch((error) => {
            let response = ResponseHandler.error(error, "User creation failed.");
            Response.send(response);
        });
});

// ---------------------------------------------------
UsersRoutes.put("/users/:userId", function(Request, Response) {
    const payload = Request.body;
    const userId = Request.params.userId;

    UserAPIClient.updateUser(payload, userId)
        .then((value) => {
            let response = ResponseHandler.success(
                value,
                "User updated successfully."
            );
            Response.send(response);
        })
        .catch((error) => {
            let response = ResponseHandler.error(error, "User not updated.");
            Response.send(response);
        });
});
// ---------------------------------------------------
UsersRoutes.delete("/users/:userId", function(Request, Response) {
    const userId = Request.params.userId;

    UserAPIClient.deleteUser(userId)
        .then((value) => {
            let response = ResponseHandler.success(
                value,
                "User deleted successfully."
            );
            Response.send(response);
        })
        .catch((error) => {
            let response = ResponseHandler.error(error, "User not deleted.");
            Response.send(response);
        });
});

//-------------------------------------------------------
module.exports = UsersRoutes;
//--------------------------------------------------------