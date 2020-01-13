const express = require ('express');

const router = express.Router();

var app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);


router.get('/message',function(req,res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    }) 
    res.send('Lista de mensajes');
} );

router.post('/message',function(req,res){
    console.log(req.body);
    console.log(req.query)
    res.send('Mensaje'+ req.body.text +' añadido correctamente')
} );

router.delete('/message',function(req,res){
    console.log(req.body);
    console.log(req.query)
    res.status(201).send({error:'', body:'se elimino correctamente'})
} );

/*app.use('/', function(req, res){
    res.send('Hola');
});*/

app.listen(3000);
console.log('La aplicacion esta escuchando en httpp://localhost:3000');
