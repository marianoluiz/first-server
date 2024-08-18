 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    
    let dateVal = new Date(today.getDate());
    let greeting = "Good Day";

    if(dateVal.getHours() >= 21 ) {
        greeting = "Good Night";
    } else if(dateVal.getHours() >= 18 ) {
        greeting = "Good Evening";
    } else if(dateVal.getHours() >= 12 ) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Morning";
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the status code to 200 (OK) and content type to plain text

    res.end(`Hello, ${greeting}`);
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
