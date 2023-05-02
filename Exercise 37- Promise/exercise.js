const number = 15;

let value = new Promise((resolve, reject) => {
    if(number > 10){
        resolve("number is greater than 10")
    }else{
        reject ("number is lower than 10")
    }
})

value
  .then((arg) => {console.log(arg)})
  .catch((err) =>{console.error(err)})
  
