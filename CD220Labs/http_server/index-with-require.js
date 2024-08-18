 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    res.end(`Hello, World! The date today is ${today.getDate()}`);

    let dateVal = today.getDate();

    console.log("\n\n" + dateVal);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);


/* cat index.js 

cat: Short for "concatenate", cat is a command-line utility used to read and display the contents of files.
*/

/* run: node index.js */

/* ping the application: curl.exe localhost:8080 

it means http request
Checks if a web server is responding to HTTP requests.
*/
