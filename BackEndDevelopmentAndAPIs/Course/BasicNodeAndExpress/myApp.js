let express = require("express");
let app = express();

// 7. Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// 11. Mount body-parser middleware
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// 1.
// console.log("Hello World")

// 2.
// app.get("/", (req, res) => {
//     res.send("Hello Express");
//   });

// 3.
absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

// 4. middleware
app.use("/public", express.static(__dirname + "/public"));

// 5. json
// app.get("/json", (req, res) => res.json({ message: "Hello json" }));

// 6. env
// create the .env file and store variable
require("dotenv").config();

console.log(process.env.MESSAGE_STYLE);
app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json(message);
  }
});

// 7. Place it before everything
// ^^^^^    begining of the file

// 8. Time Server
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

// 9. Get input from client
app.get("/:word/echo", (req, res) => {
  console.log(req.params.word);
  res.json({ echo: req.params.word });
});

// 10. Get Query Parameter Input from the Client
app.get("/name", (req, res) => {
  console.log(req.query);
  let { first: firstName, last: lastName } = req.query;
  res.json({ name: `${firstName} ${lastName}` });
});

// 11. Mount body-parser middleware
// Place it before everything
// ^^^^^    begining of the file

// 12. Get Data from POST Requests
app.post(
  "/name",
  bodyParser.urlencoded({ extended: false }),
  (request, response) => {
    let string = request.body.first + " " + request.body.last;
    response.json({ name: string });
  }
);

module.exports = app;
