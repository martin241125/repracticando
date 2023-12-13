// ejercicio 1 Hacer un programa para ingresar un número y luego se emita por pantalla un
//cartel aclaratorio si “Es mayor a 10” o “No es mayor a 10”.

const mayorATen = (num) => {
    if(num > 10){
        return "si, es mayor"
    }
    return "no, no es mayor"
}

console.log(mayorATen(11))

//ejercicio 2 Hacer un programa para ingresar dos números distintos y luego se muestre por
//pantalla el menor de ellos.

const cualEsMayor = (num1, num2) => {
    if(num1 > num2){
        return "num1 es mayor que num2"
    }
    return "num2 es mayor que num1"
}

console.log(cualEsMayor(1,2))

//Hacer un programa para ingresar dos números y que luego emita por pantalla
//el mayor de ellos o un cartel aclaratorio “Son iguales” en el caso de que así sea.
//Nota: los números pueden ser iguales.


const cualEsMayorOIgual = (num1, num2) => {
    if(num1 >= num2){
        return "num1 es mayor que num2"
    }
    return "num2 es mayor que num1"
}

//Hacer un programa para ingresar un número y luego se emita un cartel por
//pantalla “Positivo” si el número es mayor a cero, “Negativo” si el número es
//menor a cero o “Cero” si el número es igual a cero.

const mayorACero = (num) => {
   if(num > 0){
    return "si, el numero es positivo y mayor a cero"
   } else if (num == 0){
    return "el numero es cero"
   }
   return "el numero es negativo"
}

console.log(mayorACero(-3))

//Hacer un programa para ingresar un número y mostrar por pantalla un cartel
//aclaratorio si el mismo es PAR o IMPAR.

const parImpar = (num) => {
    if(num % 2 == 0 ){
        return "es par"
    }
    return "es impar"
}

console.log(parImpar(4))