// 02_modifying_elements.js

/*
  ========================================
  EJERCICIO: Modificación de Elementos del DOM
  ========================================

  Descripción:
  Este ejercicio te guiará a través de la modificación de contenido, atributos y estilos
  de elementos HTML existentes utilizando JavaScript.

  Instrucciones:
  - Abre el archivo `index.html` en tu navegador para ver los elementos disponibles.

  1.  **Modificar `textContent`:**
      - Selecciona el párrafo con el ID `mi-parrafo`.
      - Cambia su `textContent` a "¡Este párrafo ha sido modificado por JavaScript!".
      - `console.log()` el nuevo `textContent`.

  2.  **Modificar `innerHTML`:**
      - Selecciona el div con el ID `contenedor-modificar`.
      - Cambia su `innerHTML` a:
        `<h3>Nuevo Título</h3><p>Este es <strong>contenido</strong> <mark>HTML</mark> agregado dinámicamente.</p>`
      - Observa cómo se renderiza el HTML.

  3.  **Modificar Atributos:**
      - Selecciona la imagen con el ID `mi-imagen`.
      - Cambia su atributo `src` a `https://via.placeholder.com/200/4CAF50/FFFFFF?text=Nueva+Imagen` (verde).
      - Cambia su atributo `alt` a "Una nueva imagen de ejemplo".
      - `console.log()` los nuevos valores de `src` y `alt`.

  4.  **Manipular Clases CSS (`classList`):**
      - Selecciona el primer div con la clase `elemento-clase`.
      - Añade la clase `resaltado` a este elemento. (Esta clase está definida en `index.html` con estilos).
      - Elimina la clase `elemento-clase` de este mismo elemento.
      - `console.log()` la `classList` del elemento.

  5.  **Modificar Estilos en Línea (`style`):**
      - Selecciona el segundo div con la clase `elemento-clase`.
      - Cambia su `backgroundColor` a `lightcoral`.
      - Cambia su `color` de texto a `white`.
      - Cambia su `padding` a `20px`.
      - `console.log()` el `style` del elemento.

  Recomendaciones:
  - Recuerda que `textContent` solo maneja texto plano, mientras que `innerHTML` puede manejar HTML.
  - Usa `classList` para añadir/eliminar clases de manera segura.
  - Para propiedades CSS con guiones (ej. `background-color`), usa camelCase en JavaScript (`backgroundColor`).

  Puntos a cubrir:
  - `element.textContent`
  - `element.innerHTML`
  - `element.setAttribute()`
  - `element.removeAttribute()` (opcional, para practicar)
  - `element.classList.add()`, `element.classList.remove()`, `element.classList.toggle()`
  - `element.style.propertyName`
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 02: Modificación de Elementos del DOM ---");

// 1. Modificar `textContent`
const parrafoModificar = document.getElementById('mi-parrafo');
parrafoModificar.textContent = "¡Este párrafo ha sido modificado por JavaScript!";
console.log("Nuevo textContent del párrafo:", parrafoModificar.textContent);

// 2. Modificar `innerHTML`
const contenedorModificar = document.getElementById('contenedor-modificar');
contenedorModificar.innerHTML = '<h3>Nuevo Título</h3><p>Este es <strong>contenido</strong> <mark>HTML</mark> agregado dinámicamente.</p>';
console.log("InnerHTML del contenedor modificado:", contenedorModificar.innerHTML);

// 3. Modificar Atributos
const miImagen = document.getElementById('mi-imagen');
miImagen.setAttribute('src', 'https://via.placeholder.com/200/4CAF50/FFFFFF?text=Nueva+Imagen');
miImagen.setAttribute('alt', 'Una nueva imagen de ejemplo');
console.log("Nuevo src de la imagen:", miImagen.src);
console.log("Nuevo alt de la imagen:", miImagen.alt);

// 4. Manipular Clases CSS (`classList`)
const primerElementoClase = document.querySelector('.elemento-clase');
if (primerElementoClase) {
    primerElementoClase.classList.add('resaltado');
    primerElementoClase.classList.remove('elemento-clase'); // Opcional, para ver el cambio
    console.log("Clases del primer elemento con clase:", primerElementoClase.classList);
    // Para toggling: primerElementoClase.classList.toggle('otra-clase');
}

// 5. Modificar Estilos en Línea (`style`)
// Selecciona el segundo elemento con la clase 'elemento-clase'
// Ya que el primero perdió su clase, el segundo ahora es el 'primer' .elemento-clase
// Si no quieres que el orden cambie, puedes seleccionarlo por un índice si usas querySelectorAll
const segundoElementoClase = document.getElementsByClassName('elemento-clase')[0]; // Ahora es el que era el segundo original
if (segundoElementoClase) {
    segundoElementoClase.style.backgroundColor = 'lightcoral';
    segundoElementoClase.style.color = 'white';
    segundoElementoClase.style.padding = '20px';
    console.log("Estilos en línea del segundo elemento con clase:", segundoElementoClase.style);
}

// --- PRUEBAS (No modificar) ---
// Puedes verificar los cambios visuales en la página `index.html`.