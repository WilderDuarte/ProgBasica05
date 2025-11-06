// ######### FORMAS DE IMPRESIÓN
// (1) ALERT
// alert("FUNCIONA");
// (2) CONSOLA
console.log("FUNCIONA");
// (3) LIBRERÍAS DE TERCEROS - SWEETALERT2
Swal.fire("FUNCIONA");
// (4) DESDE EL DOM
document.write("HOLA FUNCIONA");

// ######### TIPOS DE VARIABLES => const / let / var
// const => usado para variables constantes que no cambian de valor
// let => usado para variables de bloques como if por ejm
// var => un poco en desuso, se usa para variables globales
const pi = 3.14;
const inche = 2.54;
let animal = "perro";
var elemento = "silla";

// ######### TIPOS DE DATOS => string / numero / booleanos
let var_uno = 20; // entero
let var_dos = 20.5; // decimal
let var_tres = "20.5"; // string
let string = "texto"; // string 
let booelano =  false; // true
let booelano_s =  "false"; // true
let objeto_persona = {nombre:"wilder", apellido:"duarte", edad:33};
let array = ["lunes","martes","miercoles","jueves","viernes","sabados","domingos"];
let array_mixto = ["wilder",33,"duarte",20,12,91];
let array_num = [1,2,3,4,5,6,7,8,9];
let estudiantes = [
    {nombre:"Wilder", edad:"33"},
    {nombre:"Anyi", edad:"34"},
    {nombre:"Celeste", edad:"5"},
    {nombre:"Antonella", edad:"3"},
    {nombre:"Sara", edad:"0"}
]
console.log(estudiantes[0].nombre + " - " + estudiantes[0].edad);

// ######### OPERADORES LÓGICOS => AND / OR / NOT
//console.log(true && false); // Y
//console.log(true && true); // Y
//console.log(false && false); // Y
//console.log(false && true); // Y
//console.log(true || false); // O
//console.log(false || true); // O
//console.log(!true); // NEGACIÓN, LO CONTRARIO
//console.log(!false); // NEGACIÓN, LO CONTRARIO

// ######### OPERADORES DE COMPARACIÓN < / <= / > / >= / != / ==
let com_uno = 10; // Asignación (un valor a la variable let)
let com_dos = 15;
let com_tres = 10;
//console.log(com_uno > com_dos); // Mayor que 
//console.log(com_uno >= com_dos); // Mayor o igual que 
//console.log(com_tres == com_dos); // Igual
//console.log(com_tres != com_dos); // Diferente
//console.log(com_uno < com_dos); // Menor que 
//console.log(com_uno <= com_dos); // Menor o igual que

// console.log(com_uno === com_dos); // Compara valor y tipo de dato
//console.log(com_uno !== com_dos); // Diferente valor y tipo de dato

// ######### OPERADORES ARITMÉTICOS BÁSICOS + - / * %
// console.log((com_uno + com_dos) + " Resultado");
// console.log(com_uno - com_dos);
// console.log(com_uno * com_dos);
// console.log(com_uno / com_dos);
// console.log(com_uno % com_dos);

// ######### ESTRUCTURAS CONDICIONALES - IF
let edad = parseInt(prompt("Ingrese su edad"));
let estatura = parseInt(prompt("Ingrese su estatura (en cms)")); // Dada en centimetros

if(edad > 5 && estatura >= 100){
    console.log("Tiene la edad y la estatura");
} else if(edad > 5 || estatura >= 100){
    console.log("Tiene la edad o la estatura");
}else{
    console.log("No tiene la edad y la estatura");
}

let age = parseInt(prompt("Ingrese su edad"))
// para 13 niños
// para 17 adolescentes
// para 18-38 jovenes
// para 39-59 adultos
// para 60 tercera edad
if(age >= 60){
    console.log("TERCERA EDAD")
}else if(age >=39){
    console.log("UN ADULTO")
}else if(age >=18){
    console.log("UN JOVEN")
}else if(age >=12){
    console.log("UN ADOLESCENTE")
}else{
    console.log("UN NIÑO")
}

