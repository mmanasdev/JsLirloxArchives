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

// Eventos -> son acciones que se realizan en una página web. Algunos ejemplos de eventos son: click, mouseover, mouseout, keyup, keydown, etc.
// Para añadir un evento a un elemento se usa el método addEventListener
document.getElementById("boton").addEventListener("click", 
    function() {
        alert("has apretado el botón");
    }
);

//clases -> son plantillas para crear objetos. Se usan para definir las propiedades y métodos de un objeto.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años");
    }
}

const persona1 = new Persona("Juan", 30);
persona1.saludar();
const persona2 = new Persona("Maria", 25);
persona2.saludar();
const persona3 = new Persona("Pedro", 35);
persona3.saludar();

let persona4 = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años");
    }
};
persona4.saludar();
persona4.profesion = "programador";
console.log(persona4.profesion);
persona4.despedirse = function() {
    console.log("Adios");
}
persona4.despedirse();
