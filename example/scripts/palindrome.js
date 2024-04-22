const palindrome = (mensaje) => {
    let separar = mensaje.split("");
    let reversa = separar.split("").reverse();

    return separar.join("") === reversa.join("")
}
console.log(palindrome("hello")) // false
console.log(palindrome("hannah")) // true