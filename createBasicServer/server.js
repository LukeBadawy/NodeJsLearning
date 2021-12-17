const http = require("http");

// method that creates a server.
const server = http.createServer((request, response) => {
  // this callback function will run every time we send a request to our server.
  // the browser request will infinite load unless a response is returned.
  // the console.log runs on the server console, not the client console becuase it is fire from
  // the server.

  // response headers give the browser information about the data it is about to receive
  // set header info

  response.setHeader("content-type", "text/html");

  response.write("<h1>Hello Luke</h1>");
  response.write("<p>This came from your local server</p>");

  // ends the response which then send it to the browser.
  response.end();

  console.log("request received");
  console.log("request URL: ", request.url);
  console.log("request Method: ", request.method);
});

// Local host is the default value of the second param
server.listen(3000, "localhost", () => {
  // fires when we start listening
  console.log("I am listening for requests on port 3000");
});
