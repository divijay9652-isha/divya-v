// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send the response body "Aditya University"
  res.end('<h1>Aditya University</h1>');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
