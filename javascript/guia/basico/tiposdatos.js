// 01_variables_data_types.js

/*
  ========================================
  EJERCICIO: Variables y Tipos de Datos
  ========================================

  Descripción:
  Este ejercicio te ayudará a practicar la declaración de variables y la identificación
  de los tipos de datos primitivos en JavaScript.

  Instrucciones:
  - Declara una variable 'nombre' con tu nombre (debe ser una cadena de texto).
  - Declara una variable 'edad' con tu edad (debe ser un número entero).
  - Declara una variable 'esEstudiante' (debe ser un booleano, true o false).
  - Declara una variable 'saldo' (debe ser un número con decimales).
  - Declara una variable 'valorNulo' y asígnale el valor 'null'.
  - Declara una variable 'indefinido' sin asignarle ningún valor (será 'undefined' por defecto).
  - Usa console.log() para mostrar el valor y el tipo de dato de cada variable.
    Puedes usar el operador 'typeof' para obtener el tipo de dato.

  Recomendaciones:
  - Utilice `let` o `const` para declarar sus variables.
  - Comente su código para explicar lo que hace cada línea.

  Puntos a cubrir:
  - Declaración de variables (`let`, `const`)
  - Tipos de datos primitivos: `string`, `number`, `boolean`, `null`, `undefined`
  - Uso de `console.log()`
  - Uso del operador `typeof`
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

const nombre = "Juan Pérez";
let edad = 25;
const esEstudiante = true;
let saldo = 1250.75;
const valorNulo = null;
let indefinido; // Por defecto es undefined

console.log("--- Ejercicio 01: Variables y Tipos de Datos ---");
console.log("Variable: nombre, Valor:", nombre, ", Tipo:", typeof nombre);
console.log("Variable: edad, Valor:", edad, ", Tipo:", typeof edad);
console.log("Variable: esEstudiante, Valor:", esEstudiante, ", Tipo:", typeof esEstudiante);
console.log("Variable: saldo, Valor:", saldo, ", Tipo:", typeof saldo);
console.log("Variable: valorNulo, Valor:", valorNulo, ", Tipo:", typeof valorNulo); // typeof null es 'object', una peculiaridad de JS
console.log("Variable: indefinido, Valor:", indefinido, ", Tipo:", typeof indefinido);

// --- PRUEBAS (No modificar) ---
// Estas pruebas son solo para fines de demostración y no son exhaustivas.
// Puedes verificar la salida en la consola del navegador.