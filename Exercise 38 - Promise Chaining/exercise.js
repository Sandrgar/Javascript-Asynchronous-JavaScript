const isLogged = true;


function newPromise(arg) {
    return new Promise((resolve, reject) => {
        if (arg) {
            resolve(Math.random())
        } else {
            reject("error")
        }
    })
}

function secondPromise(arg2) {
    return new Promise((resolve, reject) => {
        if(arg2 > 0.5){
            resolve(`{name: "John", age: 24}`)
        }else{
            reject(`error`)
        }

    })
}

newPromise(isLogged)
    .then((arg)=>{
        console.log(arg)
        return secondPromise(arg)
    })
    .then((obj)=>{console.log(obj)})
    .catch((err)=> console.log(err))
    
 
