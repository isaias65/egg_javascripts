function stringIncludes(substring, string) {
    // Usamos el método includes() directamente para verificar si la substring está contenida en string
    return string.includes(substring);
}

// Pruebas de la función
console.log(stringIncludes("he", "Hello")); // Debería imprimir false
console.log(stringIncludes("he", "hello world")); // Debería imprimir true
