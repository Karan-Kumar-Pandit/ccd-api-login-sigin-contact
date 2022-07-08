const Express = require("express");

const UsersRoutes = Express.Router();

const ResponseHandler = require("../helpers/response-handler");

const UserAPIClient = require("../domain/users/api-client");
// ------------------------------------------------------

UsersRoutes.get("/signup/users", function(Request, Response) {
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

//-------------------------------------------------------
module.exports = UsersRoutes;
//--------------------------------------------------------