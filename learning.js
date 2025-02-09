//variables
let nombre = "Juan"; //Texto (string)
let edad = 30; //Numero (int)
let esMayor = true; //Booleano (boolean)

const nombres = ["Juan", "Pedro", "Maria"]; //Array

const arreglo = ["Juan", 30, true]; //Array

const suma1 = (a, b) => a + b; //Funcion

let persona = {
    nombre: "Juan",
    edad: 30,
    esMayor: true
}; //Objeto

const areegloObjetos = ["Juan", 30, true, suma1, persona]; //Array de objetos

//funciones -> son bloques de codigo que se ejecutan cuando son llamados
function saludar() {
    console.log("Hola");
}

saludar();

function suma(a, b) {
    const resultado = a + b;
    return resultado;
}

suma(2, 3); //5

//función en flecha -> es una forma más corta de escribir una función. Se usa para funciones que no tienen nombre

const suma = (a, b) => a + b;

suma(2, 3); //5

//Condicionales
const edad1 = 30;

if (edad1 >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

//ternarios -> es una forma más corta de escribir un if. Se usa para condiciones simples. condicion ? valor si verdadero : valor si falso
const edad2 = 30;
edad2 >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

const esMayorDeEdad =(edad) => edad >= 18;

//bucles -> se usan para repetir un bloque de código varias veces. Hay varios tipos de bucles: for, while, do while, for of, for in
for (let i = 0; i < 10; i++) {
    console.log("Número: " + i);
}

const numeros = [1, 2, 3, 4, 5];
         // pos: 0  1  2  3  4
let summ = numeros[1] + numeros[2]; //5

let sumatorio = 0;
for (let i = 0; i < numeros.length; i++) {
    sumatorio += numeros[i];
}

let numero = 0;
while (numero < 10) {
    console.log("Número: " + numero);
    numero++;
}

