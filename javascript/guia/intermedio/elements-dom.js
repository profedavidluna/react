// 01_selecting_elements.js

/*
  ========================================
  EJERCICIO: Selección de Elementos del DOM
  ========================================

  Descripción:
  Este ejercicio te enseñará a obtener referencias a elementos HTML desde JavaScript
  utilizando diferentes métodos de selección del Document Object Model (DOM).

  Instrucciones:
  - Abre el archivo `index.html` en tu navegador para ver la estructura HTML.
  - Utiliza los métodos de selección del DOM para obtener los siguientes elementos:

  1.  **Por ID:**
      - Obtén el elemento con el ID `mi-parrafo`.
      - Imprímelo en la consola.

  2.  **Por Nombre de Etiqueta (Tag Name):**
      - Obtén todos los elementos `<p>`.
      - Imprime la colección (NodeList o HTMLCollection) resultante en la consola.
      - Itera sobre la colección e imprime el `textContent` de cada párrafo.

  3.  **Por Nombre de Clase (Class Name):**
      - Obtén todos los elementos con la clase `elemento-clase`.
      - Imprime la colección resultante en la consola.
      - Itera sobre la colección e imprime el `textContent` de cada elemento.

  4.  **Por Selector CSS (Primer Elemento):**
      - Obtén el primer elemento que coincida con el selector CSS `div.elemento-clase`.
      - Imprímelo en la consola.

  5.  **Por Selector CSS (Todos los Elementos):**
      - Obtén todos los elementos que coincidan con el selector CSS `span, button`.
      - Imprime la colección resultante en la consola.
      - Itera sobre la colección e imprime el `textContent` de cada elemento.

  Recomendaciones:
  - Observa la diferencia entre los métodos que retornan un solo elemento y los que retornan una colección.
  - Las colecciones (`NodeList` o `HTMLCollection`) no son arrays puros, pero pueden iterarse con `forEach` o bucles `for...of`.

  Puntos a cubrir:
  - `document.getElementById()`
  - `document.getElementsByTagName()`
  - `document.getElementsByClassName()`
  - `document.querySelector()`
  - `document.querySelectorAll()`
  - Propiedad `textContent`
  - Iteración sobre colecciones de elementos
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 01: Selección de Elementos del DOM ---");

// 1. Por ID
const miParrafo = document.getElementById('mi-parrafo');
console.log("Elemento por ID 'mi-parrafo':", miParrafo);
console.log("Contenido de 'mi-parrafo':", miParrafo.textContent);

// 2. Por Nombre de Etiqueta (Tag Name)
const todosLosParrafos = document.getElementsByTagName('p');
console.log("\nTodos los elementos <p>:", todosLosParrafos);
console.log("Contenido de cada <p>:");
for (let i = 0; i < todosLosParrafos.length; i++) {
    console.log(`- ${todosLosParrafos[i].textContent}`);
}

// 3. Por Nombre de Clase (Class Name)
const elementosClase = document.getElementsByClassName('elemento-clase');
console.log("\nTodos los elementos con clase 'elemento-clase':", elementosClase);
console.log("Contenido de cada elemento con clase 'elemento-clase':");
// HTMLCollection no tiene forEach directamente en todos los navegadores, es mejor convertirlo a array o usar un for loop
Array.from(elementosClase).forEach(elemento => {
    console.log(`- ${elemento.textContent}`);
});

// 4. Por Selector CSS (Primer Elemento)
const primerDivClase = document.querySelector('div.elemento-clase');
console.log("\nPrimer elemento con selector 'div.elemento-clase':", primerDivClase);
console.log("Contenido del primer div con clase:", primerDivClase.textContent);

// 5. Por Selector CSS (Todos los Elementos)
const spansYBotones = document.querySelectorAll('span, button');
console.log("\nTodos los elementos con selector 'span, button':", spansYBotones);
console.log("Contenido de cada span o botón:");
spansYBotones.forEach(elemento => {
    console.log(`- ${elemento.textContent}`);
});

// --- PRUEBAS (No modificar) ---
// Puedes verificar la salida en la consola del navegador.