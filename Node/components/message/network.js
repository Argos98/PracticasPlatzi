const express =require('express');
const router = express.Router(); 
const response = require('../../network/response');
const controller = require('./controller');
router.get('/',function(req,res){
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro valor pesonalizado"
    })
    response.success(req,res,'mensaje recivido correctamente');
} );  

router.post('/',function(req,res){
  controller.addMessage(req.body.user, req.body.message)
    .then(()=>{
        response.success(req,res,'creado correctamente'); 
    })
    .catch(e =>{
        response.error(req,res,'Iformacion invalidad ', 400, 'Error en controller') 
    });
  

} ); 


module.exports = router;  