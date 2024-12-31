

let count = 0;
let id= setInterval(()=>{
    console.log("Hello nodejs user..."+count);
    if(count == 4){
        clearInterval(id);
    }
    count++;
},1000); // 1s