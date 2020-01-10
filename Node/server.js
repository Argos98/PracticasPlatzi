const express = require ('express');

const router = express.Router();

var app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(router);


router.get('/message',function(req,res){
    res.send('Lista de mensajes')
} );

router.post('/message',function(req,res){
    console.log(req.body);
    console.log(req.query)
    res.send('Mensaje añadido correctamente')
} );

/*app.use('/', function(req, res){
    res.send('Hola');
});*/

app.listen(3000);
console.log('La aplicacion esta escuchando en httpp://localhost:3000');
