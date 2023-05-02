function printAsyncName(callback, string){
     let id = setInterval(() => {
       callback()}, 1000);
    setTimeout(() => clearInterval(id), 3000)
    let id2 = setInterval(() => {
        console.log(string)}, 2000);
     setTimeout(() => clearInterval(id2), 3000)
}

function sayHello(){
    console.log("hello")
}

printAsyncName(sayHello, "giggi")
