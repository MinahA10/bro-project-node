const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bonjour, monde!\n');
});

server.listen(port, hostname, () => {
  console.log(`Serveur exécuté à l'adresse http://${hostname}:${port}/`);
});
