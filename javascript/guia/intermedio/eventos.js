/ 03_event_listeners.js

/*
  ========================================
  EJERCICIO: Manejo de Eventos (Event Listeners)
  ========================================

  Descripción:
  Este ejercicio se enfoca en cómo JavaScript puede responder a las interacciones del usuario
  (eventos) en la página web utilizando `addEventListener`.

  Instrucciones:
  - Abre el archivo `index.html` en tu navegador para probar los eventos.

  1.  **Evento `click` en Botón:**
      - Selecciona el botón con el ID `mi-boton`.
      - Agrega un `click` event listener.
      - Cuando se haga clic, imprime en la consola: "¡Botón clickeado!".

  2.  **Eventos `mouseover` y `mouseout` en Div:**
      - Selecciona el div con el ID `cuadro-eventos`.
      - Agrega un `mouseover` event listener:
        - Cuando el mouse esté sobre el div, cambia su `backgroundColor` a `var(--primary-color)` (el rojo principal).
        - Cambia su `color` de texto a `white`.
      - Agrega un `mouseout` event listener:
        - Cuando el mouse salga del div, restaura su `backgroundColor` a `lightgray`.
        - Restaura su `color` de texto a `black`.

  3.  **Evento `input` en Campo de Texto:**
      - Selecciona el campo de texto con el ID `input-texto`.
      - Agrega un `input` event listener.
      - Cada vez que el valor del campo cambie (mientras el usuario escribe),
        imprime en la consola el valor actual del campo: "Texto actual: [valor]".

  4.  **Evento `DOMContentLoaded`:**
      - Agrega un event listener al `document` para el evento `DOMContentLoaded`.
      - Este evento se dispara cuando el DOM está completamente cargado y parseado.
      - Dentro de la función del listener, imprime en la consola: "El DOM está completamente cargado y listo!".
        (Este mensaje debería aparecer primero en la consola).

  Recomendaciones:
  - `addEventListener` es la forma moderna y recomendada de manejar eventos.
  - Usa el objeto `event` (a menudo abreviado como `e`) en los manejadores de eventos para acceder a información del evento (ej. `e.target.value`).

  Puntos a cubrir:
  - `element.addEventListener(eventName, handlerFunction)`
  - Eventos comunes: `click`, `mouseover`, `mouseout`, `input`, `DOMContentLoaded`
  - Acceso a `event.target.value` para inputs
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 03: Manejo de Eventos (Event Listeners) ---");

// 1. Evento `click` en Botón
const miBoton = document.getElementById('mi-boton');
if (miBoton) {
    miBoton.addEventListener('click', () => {
        console.log("¡Botón clickeado!");
    });
}

// 2. Eventos `mouseover` y `mouseout` en Div
const cuadroEventos = document.getElementById('cuadro-eventos');
if (cuadroEventos) {
    cuadroEventos.addEventListener('mouseover', () => {
        cuadroEventos.style.backgroundColor = 'var(--primary-color)'; // Color rojo
        cuadroEventos.style.color = 'white';
    });

    cuadroEventos.addEventListener('mouseout', () => {
        cuadroEventos.style.backgroundColor = 'lightgray';
        cuadroEventos.style.color = 'black';
    });
}

// 3. Evento `input` en Campo de Texto
const inputTexto = document.getElementById('input-texto');
if (inputTexto) {
    inputTexto.addEventListener('input', (event) => {
        console.log("Texto actual:", event.target.value);
    });
}

// 4. Evento `DOMContentLoaded`
document.addEventListener('DOMContentLoaded', () => {
    console.log("El DOM está completamente cargado y listo!");
});

// --- PRUEBAS (No modificar) ---
// Puedes interactuar con los elementos en la página `index_dom.html` y verificar la consola.