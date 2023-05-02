function repeatHello(callback){
let id = setInterval(() => {
    callback()
}, 1000)
setTimeout(() => clearInterval(id), 2000)
}

function helloTwo(){
    console.log("hello")
}

repeatHello(helloTwo)

// Un Arrow Function è un modo conciso per definire una funzione in JavaScript. 
// Ha una sintassi più breve rispetto alle espressioni di funzione tradizionali 