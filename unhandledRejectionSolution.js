const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate an asynchronous operation that might reject
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //Simulate an error condition
      reject(new Error('Something went wrong!'));
    }, 1000);
  })
    .catch((error) => {
      console.error('Promise rejected:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  //Application specific logging, throwing an error, or other handling
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});