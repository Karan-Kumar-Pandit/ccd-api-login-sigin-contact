const app = require("./src/routes/index");

app.get("/", function(Request, Response) {
    Response.send("Welcome to CCD");
});

//--------------------------------------------------------
app.listen(9200, function() {
    console.log("Server is Running on port number 9200..");
});
//--------------------------------------------------------