const Express = require("express");

const LoginRoutes = Express.Router();

const ResponseHandler = require("../helpers/response-handler");

const UserAPIClient = require("../domain/users/api-client");

// ------------------------------------------------------

LoginRoutes.get("/total-login-users", function(Request, Response) {
    UserAPIClient.countLoginUsers()
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

LoginRoutes.get("/login-users", function(Request, Response) {
    UserAPIClient.getLoginUsers()
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

LoginRoutes.get("/login-user/:userId", function(Request, Response) {
    const userId = Request.params.userId;
    UserAPIClient.getLoginUserById(userId)
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

LoginRoutes.get("/login-user/name/:userName", function(Request, Response) {
    const userName = Request.params.userName;
    UserAPIClient.getLoginUserByName(userName)
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
LoginRoutes.post("/login-users", function(Request, Response) {
    const payload = Request.body;

    UserAPIClient.createLoginUsers(payload)
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
LoginRoutes.put("/login-users/:userId", function(Request, Response) {
    const payload = Request.body;
    const userId = Request.params.userId;

    UserAPIClient.updateLoginUser(payload, userId)
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
LoginRoutes.delete("/login-users/:userId", function(Request, Response) {
    const userId = Request.params.userId;

    UserAPIClient.deleteLoginUser(userId)
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
module.exports = LoginRoutes;
//--------------------------------------------------------