const Express = require("express");

const SignupRoutes = Express.Router();

const ResponseHandler = require("../helpers/response-handler");

const UserAPIClient = require("../domain/users/api-client");

// ------------------------------------------------------

SignupRoutes.get("/total-signup-users", function(Request, Response) {
    UserAPIClient.countSignupUsers()
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

SignupRoutes.get("/signup-users", function(Request, Response) {
    UserAPIClient.getSignupUsers()
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

SignupRoutes.get("/user/:userId", function(Request, Response) {
    const userId = Request.params.userId;
    UserAPIClient.getSignupUserById(userId)
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

SignupRoutes.get("/user/name/:userName", function(Request, Response) {
    const userName = Request.params.userName;
    UserAPIClient.getSignupUserByName(userName)
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
SignupRoutes.post("/signup-users", function(Request, Response) {
    const payload = Request.body;

    UserAPIClient.createSignupUser(payload)
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
SignupRoutes.put("/signup-users/:userId", function(Request, Response) {
    const payload = Request.body;
    const userId = Request.params.userId;

    UserAPIClient.updateSignupUser(payload, userId)
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
SignupRoutes.delete("/signup-users/:userId", function(Request, Response) {
    const userId = Request.params.userId;

    UserAPIClient.deleteSignupUser(userId)
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
module.exports = SignupRoutes;
//--------------------------------------------------------