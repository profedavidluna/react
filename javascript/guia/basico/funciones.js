// 05_functions.js

/*
  ========================================
  EJERCICIO: Funciones
  ========================================

  Descripción:
  Este ejercicio te permitirá practicar la definición y el uso de funciones
  en JavaScript, incluyendo funciones declaradas, expresadas y funciones flecha,
  así como el uso de parámetros y valores de retorno.

  Instrucciones:
  1.  **Función Declarada `saludar`:**
      - Define una función declarada llamada `saludar` que acepte un argumento `nombre`.
      - La función debe imprimir en la consola el mensaje: "Hola, [nombre]!".
      - Llama a esta función con tu nombre.

  2.  **Función Expresada `sumar`:**
      - Define una función expresada (asignada a una variable) llamada `sumar`
        que acepte dos argumentos `a` y `b`.
      - La función debe retornar la suma de `a` y `b`.
      - Llama a esta función con los números 5 y 3, y luego imprime el resultado en la consola.

  3.  **Función Flecha `multiplicar`:**
      - Define una función flecha (arrow function) llamada `multiplicar`
        que acepte dos argumentos `x` y `y`.
      - La función debe retornar el producto de `x` y `y`.
      - Llama a esta función con los números 7 y 4, y luego imprime el resultado en la consola.

  4.  **Función con Parámetros por Defecto `calcularAreaRectangulo`:**
      - Define una función llamada `calcularAreaRectangulo` que acepte `largo` y `ancho` como argumentos.
      - Asigna valores por defecto de `10` para `largo` y `5` para `ancho` si no se proporcionan.
      - La función debe retornar el área del rectángulo (`largo * ancho`).
      - Llama a la función de dos maneras:
        - Sin argumentos.
        - Con los argumentos `8` y `4`.
      - Imprime ambos resultados en la consola.

  Recomendaciones:
  - Presta atención a las diferentes sintaxis para definir funciones.
  - Recuerda que las funciones pueden retornar valores.

  Puntos a cubrir:
  - Declaración de funciones (`function nombreFuncion() {}`)
  - Expresiones de funciones (`const nombreFuncion = function() {}`)
  - Funciones flecha (`const nombreFuncion = () => {}`)
  - Parámetros y argumentos
  - Valores de retorno (`return`)
  - Parámetros por defecto
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 05: Funciones ---");

// 1. Función Declarada `saludar`
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar("María"); // Llama a la función con tu nombre

// 2. Función Expresada `sumar`
const sumar = function(a, b) {
    return a + b;
};
const resultadoSuma = sumar(5, 3);
console.log("Resultado de sumar 5 y 3:", resultadoSuma); // 8

// 3. Función Flecha `multiplicar`
const multiplicar = (x, y) => {
    return x * y;
};
const resultadoMultiplicacion = multiplicar(7, 4);
console.log("Resultado de multiplicar 7 y 4:", resultadoMultiplicacion); // 28

// Función flecha con cuerpo conciso (una sola línea de retorno)
const multiplicarCorto = (x, y) => x * y;
console.log("Resultado de multiplicar 6 y 2 (corto):", multiplicarCorto(6, 2)); // 12


// 4. Función con Parámetros por Defecto `calcularAreaRectangulo`
function calcularAreaRectangulo(largo = 10, ancho = 5) {
    return largo * ancho;
}

const areaDefault = calcularAreaRectangulo();
console.log("Área del rectángulo (sin argumentos):", areaDefault); // 50 (10 * 5)

const areaPersonalizada = calcularAreaRectangulo(8, 4);
console.log("Área del rectángulo (8x4):", areaPersonalizada); // 32

// --- PRUEBAS (No modificar) ---
// Puedes verificar la salida en la consola del navegador.