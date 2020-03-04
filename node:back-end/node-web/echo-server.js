const http = require('http');
const server = http.createServer();


server.on('request', (req, res)=>{
  if(req.method ==='POST'&& req.url == "/echo"){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hola a todos')
  }else {
      res.statusCode = 404;
      res.end();
  }


});

server.listen(8001);
console.log("servidor corriendo http://localhost:8001") 