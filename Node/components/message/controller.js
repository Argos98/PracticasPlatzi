




function addMessage(user, message){

    return new Promise((resolve, reject)=>{
        if(!user|| !message){
            console.error('[messageController] No Hay usuario o mensaje ');
            return reject('Datos erronios');

        }
    
        let fullMessage ={
            user : user,
            message: message,
            date: new Date(), 
        };
      
        console.log(fullMessage);
        resolve(fullMessage);
    })

    

}

module.exports ={
    addMessage, 
}