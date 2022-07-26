const Express = require("express");

const ContactRoutes = Express.Router();

const ResponseHandler = require("../helpers/response-handler");

const UserAPIClient = require("../domain/users/api-client");

// ------------------------------------------------------

ContactRoutes.get("/total-contact-users", function(Request, Response) {
    UserAPIClient.countContactUsers()
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

ContactRoutes.get("/contact-users", function(Request, Response) {
    UserAPIClient.getContactUsers()
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

ContactRoutes.get("/user/:userId", function(Request, Response) {
    const userId = Request.params.userId;
    UserAPIClient.getContactUserById(userId)
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

ContactRoutes.get("/user/name/:userName", function(Request, Response) {
    const userName = Request.params.userName;
    UserAPIClient.getContactUserByName(userName)
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
ContactRoutes.post("/contact-users", function(Request, Response) {
    const payload = Request.body;

    UserAPIClient.createContactUser(payload)
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
ContactRoutes.put("/contact-users/:userId", function(Request, Response) {
    const payload = Request.body;
    const userId = Request.params.userId;

    UserAPIClient.updateContactUser(payload, userId)
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
ContactRoutes.delete("/contact-users/:userId", function(Request, Response) {
    const userId = Request.params.userId;

    UserAPIClient.deleteContactUser(userId)
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
module.exports = ContactRoutes;
//--------------------------------------------------------