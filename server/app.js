let express = require("express"),
     app = express(),
     bodyParser = require("body-parser"),
     port = 8080;

 app.use(express.static(__dirname + '/public'));
 app.use(bodyParser.urlencoded({extended: true}));
 app.set("view engine", "ejs"); 

 app.get("/views", (req, res) => {
 	console.log('You have reached the server')
 });

 app.listen(port, () => {
 	console.log("Server is listening on Port" + port);
 }); 