// 04_dynamic_content.js

/*
  ========================================
  EJERCICIO: Contenido Dinámico del DOM
  ========================================

  Descripción:
  Este ejercicio te enseñará a crear, añadir y eliminar elementos HTML
  dinámicamente usando JavaScript, lo cual es fundamental para construir interfaces interactivas.

  Instrucciones:
  - Abre el archivo `index.html` en tu navegador para ver la estructura inicial.

  1.  **Crear y Añadir un Nuevo Elemento:**
      - Crea un nuevo elemento `div` usando `document.createElement()`.
      - Asigna un `textContent` a este div: "Este es un div creado dinámicamente.".
      - Añade una clase CSS `nueva-clase-dinamica` a este div.
      - Añade este nuevo div al final del `body` del documento usando `appendChild()`.

  2.  **Añadir Ítems a una Lista (createElement y appendChild):**
      - Selecciona la lista desordenada (`<ul>`) con el ID `lista-dinamica`.
      - Crea un array de nombres (ej. `['Alice', 'Bob', 'Charlie']`).
      - Itera sobre este array. Por cada nombre:
        - Crea un nuevo elemento `li` (`document.createElement('li')`).
        - Asigna el nombre como su `textContent`.
        - Añade este `li` a la `lista-dinamica` usando `appendChild()`.

  3.  **Eliminar un Elemento Existente:**
      - Selecciona el párrafo con el ID `parrafo-a-eliminar`.
      - Elimínalo del DOM usando `removeChild()` (necesitarás la referencia a su padre o usar `element.remove()`).
      - `console.log()` un mensaje confirmando la eliminación.

  4.  **Reemplazar un Elemento:**
      - Selecciona el div con el ID `reemplazar-este`.
      - Crea un nuevo elemento `p` (`document.createElement('p')`).
      - Asigna su `textContent` a "¡Este párrafo ha reemplazado al div anterior!".
      - Reemplaza el div original por este nuevo párrafo. (Necesitarás el padre del div y el método `replaceChild()`).

  Recomendaciones:
  - `appendChild()` añade al final. Considera `prepend()` o `insertBefore()` para otras posiciones.
  - `element.remove()` es una forma más moderna de eliminar un elemento sin necesidad de la referencia al padre.
  - Cuando trabajes con un NodeList o HTMLCollection (como `querySelectorAll` o `getElementsByClassName`), recuerda que no son arrays y es mejor convertirlos (`Array.from()`) o usar un bucle `for...of` para iterar.

  Puntos a cubrir:
  - `document.createElement()`
  - `element.appendChild()`
  - `element.prepend()` (opcional, para practicar)
  - `element.insertBefore()` (opcional, para practicar)
  - `element.removeChild()`
  - `element.remove()` (forma moderna de eliminar)
  - `element.replaceChild()`
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 04: Contenido Dinámico del DOM ---");

// 1. Crear y Añadir un Nuevo Elemento
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = "Este es un div creado dinámicamente.";
nuevoDiv.classList.add('nueva-clase-dinamica');
document.body.appendChild(nuevoDiv);
console.log("Nuevo div creado y añadido al body.");

// 2. Añadir Ítems a una Lista
const listaDinamica = document.getElementById('lista-dinamica');
const nombres = ['Alice', 'Bob', 'Charlie'];

if (listaDinamica) {
    nombres.forEach(nombre => {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = `Nombre: ${nombre}`;
        listaDinamica.appendChild(nuevoLi);
    });
    console.log("Elementos añadidos a la lista dinámica.");
}

// 3. Eliminar un Elemento Existente
const parrafoAEliminar = document.getElementById('parrafo-a-eliminar');
if (parrafoAEliminar) {
    // Opción 1: Usando removeChild (necesita el padre)
    // parrafoAEliminar.parentNode.removeChild(parrafoAEliminar);

    // Opción 2: Usando element.remove() (más simple, moderno)
    parrafoAEliminar.remove();
    console.log("Párrafo con ID 'parrafo-a-eliminar' ha sido eliminado.");
}

// 4. Reemplazar un Elemento
const divAReemplazar = document.getElementById('reemplazar-este');
if (divAReemplazar) {
    const nuevoParrafoReemplazo = document.createElement('p');
    nuevoParrafoReemplazo.textContent = "¡Este párrafo ha reemplazado al div anterior!";
    nuevoParrafoReemplazo.style.cssText = "background-color: lightgreen; padding: 10px; border: 1px solid green;";

    // Para reemplazar, necesitamos el padre del elemento a reemplazar
    const padreDelDiv = divAReemplazar.parentNode;
    if (padreDelDiv) {
        padreDelDiv.replaceChild(nuevoParrafoReemplazo, divAReemplazar);
        console.log("El div con ID 'reemplazar-este' ha sido reemplazado por un nuevo párrafo.");
    }
}

// --- PRUEBAS (No modificar) ---
// Puedes verificar los cambios visuales en la página `index_dom.html`.