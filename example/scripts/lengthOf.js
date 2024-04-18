const lengthOf = (mensaje) =>{
    if(mensaje === ""){
        return "Invalid input"
    }
    else{
        return mensaje.length
    }
}

console.log(lengthOf("hello"));
console.log(lengthOf(""));