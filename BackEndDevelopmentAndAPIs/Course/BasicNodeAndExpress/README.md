---
layout: page
title: Basic Node and Express
permalink: /BackEndDevelopmentAndAPIs/Course/BasicNodeAndExpress/
---

<p  align="right"><a href="#" onclick="history.back(); return false;">Previous Page</a></p>

This is the boilerplate code for the Basic Node and Express Challenges. [Click here](https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/) to view the instructions for working on these challenges on **freeCodeCamp**.

### Challenge

1. Modify the `myApp.js` file to log "Hello World" to the console.
2. Use the `app.get()` method to serve the string "Hello Express" to GET requests matching the `/` (root) path. Be sure that your code works by looking at the logs, then see the results in the preview if you are using Gitpod.

   > Note: All the code for these lessons should be added in between the few lines of code we have started you off with.

3. Send `the /views/index.html` file as a response to GET requests to the `/` path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.
4. Mount the `express.static()` middleware to the path `/public` with `app.use()`. The absolute path to the assets folder is `__dirname + /public`.

   Now your app should be able to serve a CSS stylesheet. Note that the `/public/style.css` file is referenced in the `/views/index.html` in the project boilerplate. Your front-page should look a little better now!

5. Serve the object `{"message": "Hello json"}` as a response, in JSON format, to GET requests to the `/json` route. Then point your browser to `your-app-url/json`, you should see the message on the screen.
6. Let's add an environment variable as a configuration option.

   Create a `.env` file in the root of your project directory, and store the variable `MESSAGE_STYLE=uppercase` in it.

   Then, in the `/json` GET route handler you created in the last challenge access `process.env.MESSAGE_STYLE` and transform the response object's message to uppercase if the variable equals uppercase. The response object should either be `{"message": "Hello json"}` or `{"message": "HELLO JSON"}`, depending on the `MESSAGE_STYLE` value. Note that you must read the value of `process.env.MESSAGE_STYLE` inside the route handler, not outside of it, due to the way our tests run.

   You will need to use the dotenv package. It loads environment variables from your `.env` file into `process.env`. The `dotenv` package has already been installed, and is in your project's `package.json` file. At the top of your `myApp.js` file, add `require('dotenv').config()` to load the environment variables.

7. Build a simple logger. For every request, it should log to the console a string taking the following format: `method path - ip`. An example would look like this: `GET /json - ::ffff:127.0.0.1`. Note that there is a space between `method` and `path` and that the dash separating `path` and `ip` is surrounded by a space on both sides. You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using `req.method`, `req.path` and `req.ip`. Remember to call `next()` when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.

   Note: Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to work for all the routes, it should be mounted before them.

8. In the route app.get('/now', ...) chain a middleware function and the final handler. In the middleware function you should add the current time to the request object in the req.time key. You can use new Date().toString(). In the handler, respond with a JSON object, taking the structure {time: req.time}.

   Note: The test will not pass if you don’t chain the middleware. If you mount the function somewhere else, the test will fail, even if the output result is correct.

9. Build an echo server, mounted at the route `GET /:word/echo`. Respond with a JSON object, taking the structure `{echo: word}`. You can find the word to be repeated at `req.params.word`. You can test your route from your browser's address bar, visiting some matching routes, e.g. `your-app-rootpath/freecodecamp/echo`.

10. Build an API endpoint, mounted at GET `/name`. Respond with a JSON document, taking the structure `{ name: 'firstname lastname'}`. The first and last name parameters should be encoded in a query string e.g. `?first=firstname&last=lastname`.

    Note: In the following exercise you are going to receive data from a POST request, at the same `/name` route path. If you want, you can use the method `app.route(path).get(handler).post(handler)`. This syntax allows you to chain different verb handlers on the same path route. You can save a bit of typing, and have cleaner code.

11. body-parser has already been installed and is in your project's package.json file. require it at the top of the myApp.js file and store it in a variable named bodyParser. The middleware to handle URL encoded data is returned by bodyParser.urlencoded({extended: false}). Pass the function returned by the previous method call to app.use(). As usual, the middleware must be mounted before all the routes that depend on it.

    Note: extended is a configuration option that tells body-parser which parsing needs to be used. When extended=false it uses the classic encoding querystring library. When extended=true it uses qs library for parsing.

    When using extended=false, values can be only strings or arrays. The object returned when using querystring does not prototypically inherit from the default JavaScript Object, which means functions like hasOwnProperty, toString will not be available. The extended version allows more data flexibility, but it is outmatched by JSON.

12. Follow the [instrucion here](https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/get-data-from-post-requests)

### Solution

1.  `console.log("Hello World");`
2.  `app.get("/", (req, res) => res.send("Hello Express"));`

    [Tutorial](https://www.youtube.com/watch?v=CywCbn4Y6r8&t=412s) to create an express app from scratch:

    - `npm init -y` to create a `package.json` file.
    - `npm install express` to install the express package.
    - `touch myApp.js` to create a new file.
    - Add the code to the `myApp.js` file:

      ```javascript
      let express = require("express");
      let app = express();

      app.get("/", (req, res) => {
        res.send("Hello Express");
      });
      ```

    - Run the app with `node myApp.js`.

3.  `app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));`
4.  `app.use("/public", express.static(__dirname + "/public"));`
5.  `app.get("/json", (req, res) => res.json({ message: "Hello json" }));`
6.  Create a `.env` file with the content `MESSAGE_STYLE=uppercase` and add the following code to the `myApp.js` file:

    ```javascript
    require("dotenv").config();

    app.get("/json", (req, res) => {
      let message = "Hello json";
      if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
      }
      res.json({ message });
    });
    ```

    Check the [tutorial](https://www.youtube.com/watch?v=UPN6D20dcO4)

7.  Add the following code to begining of the `myApp.js` file after the `require("dotenv").config();`:

    ```javascript
    app.use((req, res, next) => {
      console.log(`${req.method} ${req.path} - ${req.ip}`);
      next();
    });
    ```

    Check the [tutorial](https://www.youtube.com/watch?v=3YGmTLlO2mM)

8.  Add the following code to the begining of `myApp.js` file:

    ```javascript
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
    ```

    Check the [tutorial](https://www.youtube.com/watch?v=21JhRUsuEPk)

9.  Add the following code to the `myApp.js` file:

    ```javascript
    app.get("/:word/echo", (req, res) => {
      res.json({ echo: req.params.word });
    });
    ```

    Check the [tutorial](https://www.youtube.com/watch?v=QO9rzAPPCWk)

10. Add the following code to the `myApp.js` file:

    ```javascript
    app.get("/name", (req, res) => {
      let { first: firstName, last: lastName } = req.query;
      res.json({ name: `${firstName} ${lastName}` });
    });
    ```

    Test it: `http://localhost:3000/name?first=firstname&last=lastname`

    - Example: `http://localhost:3000/name?first=Juan&last=Diaz`

    Check the [tutorial](https://www.youtube.com/watch?v=gFfQXY1lYoM)

11. Add the following code to the `myApp.js` file:

    ```javascript
    let bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({ extended: false }));
    ```

    Check the [tutorial](https://www.youtube.com/watch?v=7iQLkJ3rEQo)

12. Get Data from POST Requests [tutorial](https://www.youtube.com/watch?v=9zqOoBAEuEg)

    ```javascript
    app.post(
      "/name",
      bodyParser.urlencoded({ extended: false }),
      (request, response) => {
        let string = request.body.first + " " + request.body.last;
        response.json({ name: string });
      }
    );
    ```

- View the entire [myApp.js]() file in my repository.

- Live link of the [myApp.js](https://juanpablodiaz.github.io/freecodecamp_certifications/BackEndDevelopmentAndAPIs/Course/BasicNodeAndExpress/myApp.js) or [myApp.js](./myApp.js)

<p align="right"><a href="#" onclick="scrollToTop(); return false;">Back to Top</a></p>
