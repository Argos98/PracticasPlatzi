const promise = ()=>   new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return resolve("hola")
        } else {
            reject(new Error("error"))
        }
    }, 200);
});


async function asyncAwait(){
    try{
        const msg = await promise();
        console.log('message', msg);
    }catch(err){
        console.log('error',err);
    }


}

asyncAwait();