 const EventEmmiter= require('events');
 
 class Logger extends EventEmmiter{
     execute(cb){
         console.log('before');
         this.emit('start')
         cb();
         this.emit('finish');
         console.log('afther')
     }
 }

 const logger = new Logger();

 logger.on('start',()=> console.log('Starting'));
 logger.on('finish',()=> console.log('Eso es todo amigos'));
 logger.on('finish',()=> console.log('Game Over'));

 logger.execute(() => console.log("Hola todos "));
 

