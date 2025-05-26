// 04_loops.js

/*
  ========================================
  EJERCICIO: Estructuras Iterativas (Bucles)
  ========================================

  Descripción:
  Practica el uso de diferentes tipos de bucles (`for`, `while`, `do...while`, `for...of`, `for...in`)
  para iterar sobre secuencias de números, arrays y propiedades de objetos.

  Instrucciones:
  1.  **Bucle `for` (Números Ascendentes):**
      - Usa un bucle `for` para imprimir los números del 1 al 10 en la consola.

  2.  **Bucle `while` (Números Descendentes):**
      - Usa un bucle `while` para imprimir los números del 10 al 1 en la consola.

  3.  **Bucle `do...while` (Conteo Mínimo):**
      - Usa un bucle `do...while` para imprimir los números del 0 al 5 en la consola.
        (Observa cómo `do...while` ejecuta el bloque al menos una vez).

  4.  **Bucle `for...of` (Iterar sobre un Array):**
      - Crea un array llamado `frutas` con al menos 3 nombres de frutas (strings).
      - Usa un bucle `for...of` para imprimir cada fruta en la consola.

  5.  **Bucle `for...in` (Iterar sobre Propiedades de un Objeto):**
      - Crea un objeto llamado `persona` con propiedades `nombre`, `edad` y `ciudad`.
      - Usa un bucle `for...in` para imprimir cada propiedad y su valor en la consola
        (ej. "nombre: Juan", "edad: 30").

  Recomendaciones:
  - Presta atención a las condiciones de terminación de tus bucles para evitar bucles infinitos.
  - `for...of` es para valores de iterables (arrays, strings, etc.).
  - `for...in` es para claves/propiedades de objetos.

  Puntos a cubrir:
  - `for` loop (inicialización, condición, incremento/decremento)
  - `while` loop
  - `do...while` loop
  - `for...of` loop
  - `for...in` loop
  - Iteración sobre arrays
  - Iteración sobre objetos
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 04: Estructuras Iterativas (Bucles) ---");

// 1. Bucle `for` (Números Ascendentes)
console.log("Números del 1 al 10 (for loop):");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Bucle `while` (Números Descendentes)
console.log("\nNúmeros del 10 al 1 (while loop):");
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// 3. Bucle `do...while` (Conteo Mínimo)
console.log("\nNúmeros del 0 al 5 (do...while loop):");
let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 5);

// 4. Bucle `for...of` (Iterar sobre un Array)
console.log("\nFrutas (for...of loop):");
const frutas = ['Manzana', 'Pera', 'Uva', 'Naranja'];
for (const fruta of frutas) {
    console.log(fruta);
}

// 5. Bucle `for...in` (Iterar sobre Propiedades de un Objeto)
console.log("\nPropiedades de persona (for...in loop):");
const persona = {
    nombre: 'Ana María',
    edad: 28,
    ciudad: 'San José'
};
for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// --- PRUEBAS (No modificar) ---
// Puedes verificar la salida en la consola del navegador.