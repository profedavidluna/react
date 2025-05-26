// 03_strings.js

/*
  ========================================
  EJERCICIO: Cadenas de Texto (Strings)
  ========================================

  Descripción:
  Este ejercicio te permitirá practicar las operaciones y métodos más comunes
  para manipular cadenas de texto en JavaScript.

  Instrucciones:
  1.  **Creación y Longitud:**
      - Crea una variable `frase` con el valor: "  JavaScript es un lenguaje poderoso.  "
        (Observa los espacios al principio y al final).
      - Imprime la longitud de la cadena `frase`.

  2.  **Acceso a Caracteres:**
      - Accede e imprime el primer carácter de la cadena `frase`.

  3.  **Cambio de Mayúsculas/Minúsculas:**
      - Convierte la cadena `frase` a mayúsculas y imprímela.
      - Convierte la cadena `frase` a minúsculas y imprímela.

  4.  **Eliminar Espacios en Blanco:**
      - Usa el método `trim()` para eliminar los espacios en blanco del principio y final de `frase`.
      - Almacena el resultado en una nueva variable `fraseLimpia` e imprímela.

  5.  **Reemplazar Contenido:**
      - En `fraseLimpia`, reemplaza la palabra "poderoso" por "asombroso" usando `replace()`.
      - Imprime la cadena resultante.

  6.  **Búsqueda y Verificación:**
      - Verifica si `fraseLimpia` `incluye` la palabra "lenguaje" y imprime el resultado booleano.
      - Verifica si `fraseLimpia` `comienza` con "JavaScript" y imprime el resultado booleano.
      - Verifica si `fraseLimpia` `termina` con "poderoso." y imprime el resultado booleano.
        (Recuerda usar `fraseLimpia` que ya no tiene espacios).

  7.  **Dividir Cadenas (`split`):**
      - Divide la cadena `fraseLimpia` en un array de palabras, usando el espacio como delimitador.
      - Imprime el array resultante.

  8.  **Extraer Subcadenas (`substring` o `slice`):**
      - Extrae la subcadena "lenguaje" de `fraseLimpia` (aproximadamente, no te preocupes por la precisión exacta del índice, puedes estimar). Imprime la subcadena.
      - Experimenta también con `slice()` si quieres ver la diferencia (manejo de índices negativos).

  Recomendaciones:
  - Algunos métodos de string no modifican la cadena original, sino que retornan una nueva cadena.

  Puntos a cubrir:
  - Propiedad `length`
  - Acceso a caracteres por índice `string[index]`
  - Métodos `toUpperCase()`, `toLowerCase()`
  - Método `trim()`
  - Método `replace()`
  - Métodos `includes()`, `startsWith()`, `endsWith()`
  - Método `split()`
  - Métodos `substring()`, `slice()`
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 03: Cadenas de Texto (Strings) ---");

// 1. Creación y Longitud
let frase = "  JavaScript es un lenguaje poderoso.  ";
console.log("Frase original:", `'${frase}'`);
console.log("Longitud de la frase:", frase.length); // 37

// 2. Acceso a Caracteres
console.log("Primer carácter:", frase[0]); // ' ' (un espacio)

// 3. Cambio de Mayúsculas/Minúsculas
console.log("Frase en mayúsculas:", frase.toUpperCase());
console.log("Frase en minúsculas:", frase.toLowerCase());

// 4. Eliminar Espacios en Blanco
const fraseLimpia = frase.trim();
console.log("Frase limpia (sin espacios iniciales/finales):", `'${fraseLimpia}'`); // 'JavaScript es un lenguaje poderoso.'
console.log("Longitud de la frase limpia:", fraseLimpia.length); // 32

// 5. Reemplazar Contenido
const fraseReemplazada = fraseLimpia.replace("poderoso", "asombroso");
console.log("Frase con palabra reemplazada:", fraseReemplazada);
// JavaScript es un lenguaje asombroso.

// 6. Búsqueda y Verificación
console.log("¿Incluye 'lenguaje'?:", fraseLimpia.includes("lenguaje")); // true
console.log("¿Comienza con 'JavaScript'?:", fraseLimpia.startsWith("JavaScript")); // true
console.log("¿Termina con 'poderoso.'?:", fraseLimpia.endsWith("poderoso.")); // true

// 7. Dividir Cadenas (`split`)
const palabras = fraseLimpia.split(" ");
console.log("Array de palabras:", palabras);
// [ 'JavaScript', 'es', 'un', 'lenguaje', 'poderoso.' ]

// 8. Extraer Subcadenas (`substring` o `slice`)
// 'JavaScript es un lenguaje poderoso.'
// Indices:      01234567890123456789012345678901
//              'JavaScript es un lenguaje poderoso.'
const subcadenaLenguaje = fraseLimpia.substring(16, 24); // 'lenguaje'
console.log("Subcadena 'lenguaje' (substring):", subcadenaLenguaje);

const subcadenaDesdeSlice = fraseLimpia.slice(0, 10); // 'JavaScript'
console.log("Subcadena 'JavaScript' (slice):", subcadenaDesdeSlice);

// --- PRUEBAS (No modificar) ---
// Puedes verificar la salida en la consola del navegador.