const Express = require("express");
const cors = require("cors");
// ---------------------------------------------------------
const app = Express();

app.use(cors());
app.use(Express.json());

//-------------------------------------------------------
const UsersRoutes = require("./users");
// app.use("/ccd", UsersRoutes);
app.use(UsersRoutes);

const LoginRoutes = require("./login");
app.use(LoginRoutes);

const SignupRoutes = require("./signup");
app.use(SignupRoutes);

const ContactRoutes = require("./contact");
app.use(ContactRoutes);

//-------------------------------------------------------
module.exports = app;
//--------------------------------------------------------