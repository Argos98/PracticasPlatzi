const http = require('http');
const server = http.createServer();


server.on('request', (req, res)=>{
     res.statusCode = 200;
     res.setHeader = ('Content-Type', 'text/plain'); 

     res.end('hola a todos')

});

server.listen(8000);
console.log("servidor corriendo http://localhost:8000")