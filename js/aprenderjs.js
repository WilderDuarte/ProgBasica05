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
let dias_semana = ["lunes","martes","miercoles","jueves","viernes","sabados","domingos"];
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
// let edad = parseInt(prompt("Ingrese su edad"));
// let estatura = parseInt(prompt("Ingrese su estatura (en cms)")); // Dada en centimetros

// if(edad > 5 && estatura >= 100){
//     console.log("Tiene la edad y la estatura");
// } else if(edad > 5 || estatura >= 100){
//     console.log("Tiene la edad o la estatura");
// }else{
//     console.log("No tiene la edad y la estatura");
// }

// let age = parseInt(prompt("Ingrese su edad"));
// para 13 niños
// para 17 adolescentes
// para 18-38 jovenes
// para 39-59 adultos
// para 60 tercera edad
// if(age >= 60){
//     console.log("TERCERA EDAD");
// }else if(age >=39){
//     console.log("UN ADULTO");
// }else if(age >=18){
//     console.log("UN JOVEN");
// }else if(age >=12){
//     console.log("UN ADOLESCENTE");
// }else{
//     console.log("UN NIÑO");
// }

// let base = parseFloat(prompt("Ingrese la base (mayor que 0)"));
// let altura = parseFloat(prompt("Ingrese la altura (mayor que 0)"));

// if(base > 0 && altura > 0){
//     let area = base*altura;
//     Swal.fire("El área es igual a: " + area);
// }else{
//     Swal.fire("❌ Ingrese valores válidos (mayores que cero)");
// }

// ######### CICLOS REPETITIVOS - FOR
// Los ciclos for tienen tres parámetros
for(let i=0;i<=10;i++){ // i+=2 
    if(i!=0){
        // console.log(i);
    }
}

for(let i=10;i>=0;i--){ // i-=2
    if(i!=0){
        // console.log(i);
    }
}

for(let j=0;j<dias_semana.length;j++){
    // console.log(dias_semana[j])
}

// const numero = 5;
// const numero = parseInt(prompt("Ingrese un número para hacer la tabla de multiplicación"));
// for(let i= 1;i<=10;i++){
//     // console.log(numero+"*"+i+"="+(numero*i));
//     // console.log(`${numero}*${i}=${numero*i}`);
// }

// const palabra = "javascript";
// console.log(palabra.length);
let pal_input = prompt("Ingrese la palabra");
let letra_input = prompt("Ingrese la letra a buscar");
pal_input_minus = pal_input.toLowerCase();
letra_input_minus = letra_input.toLowerCase();
let cont = 0;
for(let p=0;p<pal_input.length;p++){
    // console.log(palabra[p]);
    if(pal_input_minus[p] == letra_input_minus){
        cont++;
    }
}
// console.log("La letra a se encuentra " + cont + " veces");
Swal.fire("La letra " + letra_input.toUpperCase() + " se encuentra " + cont + " veces en la palabra " + pal_input.toUpperCase());
