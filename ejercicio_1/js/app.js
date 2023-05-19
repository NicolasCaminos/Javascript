//Actividad 1: Homero

// variable que pueden cambiar en el tiempo, por ello se usa LET
let nombre = 'Homero J';
let apellido = 'Simpsons';
let edad = 35;
let direccion;
let genero;
let pais;
console.log(`Ejercicio1: ${nombre}. ${apellido}, ${edad} años`) //Ejercicio1: Homero J Simpsons 35años
//Actividad 2: Ciudades

//CONST: variables constantes a lo largo del código
const ciudadUno = 'Springfield';
const ciudadDos = 'Albuquerque';
const ciudadTres = 'New York';
const ciudadCuatro = 'Córdoba';
const ciudadCinco = 'Buenos aires';
console.log(`Ejercicio2 `) //Ejercicio 2
console.log(`${ciudadUno}`) //Springfield
console.log(`${ciudadDos}`) //Albuquerque
console.log(`${ciudadTres}`) //New York
console.log(`${ciudadCuatro}`) //Córdoba
console.log(`${ciudadCinco}`) //Buenos aires

//Actividad 3: Carnet

function Carnet() {

    nombre = prompt('ingrese el nombre: ');
    apellido = prompt('ingrese el apellido: ');
    genero = prompt('ingrese el genero: ');
    pais = prompt('ingrese el pais: ');
    direccion = prompt('ingrese el direccion: ');
    carnet = `Los datos del carnet ingresado son de: Nombre: ${nombre}, Apellido  ${apellido}, Genero: ${genero}, Ciudad: ${ciudadUno}, País:  ${pais}, Dirección: ${direccion} `;
    alert(carnet) //Ejercicio3:Los datos del carnet ingresado son de: Nombre: ${nombre}, Apellido  ${apellido}, Genero: ${genero}, Ciudad: Springfield, País:  ${pais}, Dirección: ${direccion}
    console.log(`Ejercicio3:Los datos del carnet ingresado son de: Nombre: ${nombre}, Apellido  ${apellido}, Genero: ${genero}, Ciudad: ${ciudadUno}, País:  ${pais}, Dirección: ${direccion} `) // Ejercicio3:Los datos del carnet ingresado son de: Nombre: ${nombre}, Apellido  ${apellido}, Genero: ${genero}, Ciudad:Springfield, País:  ${pais}, Dirección: ${direccion}
}
Carnet() 