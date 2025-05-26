// 02_operators.js

/*
  ========================================
  EJERCICIO: Operadores
  ========================================

  Descripción:
  Este ejercicio te permitirá practicar el uso de los diferentes tipos de operadores en JavaScript:
  aritméticos, de asignación, de comparación y lógicos.

  Instrucciones:
  - Crea dos variables numéricas, 'a' con valor 10 y 'b' con valor 5.
  - Realiza las siguientes operaciones aritméticas y muestra el resultado en la consola:
    - Suma de 'a' y 'b'.
    - Resta de 'a' y 'b'.
    - Multiplicación de 'a' y 'b'.
    - División de 'a' entre 'b'.
    - Módulo (resto) de 'a' entre 'b'.
    - Exponenciación de 'a' elevado a 'b'.
  - Usa operadores de asignación:
    - Incrementa 'a' en 5 usando un operador de asignación compuesto.
    - Multiplica 'b' por 2 usando un operador de asignación compuesto.
    - Muestra los nuevos valores de 'a' y 'b' en la consola.
  - Compara 'a' y 'b' usando operadores de comparación y muestra el resultado booleano en la consola:
    - 'a' es igual a 'b' (==).
    - 'a' es estrictamente igual a 'b' (===).
    - 'a' es diferente de 'b' (!=).
    - 'a' es estrictamente diferente de 'b' (!==).
    - 'a' es mayor que 'b' (>).
    - 'a' es menor que 'b' (<).
    - 'a' es mayor o igual que 'b' (>=).
    - 'a' es menor o igual que 'b' (<=).
  - Crea dos variables booleanas, 'condicion1' con valor true y 'condicion2' con valor false.
  - Realiza las siguientes operaciones lógicas y muestra el resultado en la consola:
    - AND lógico (&&) entre 'condicion1' y 'condicion2'.
    - OR lógico (||) entre 'condicion1' y 'condicion2'.
    - NOT lógico (!) de 'condicion1'.

  Recomendaciones:
  - Utilice `console.log()` para mostrar cada resultado.
  - Preste atención a la diferencia entre `==` y `===`.

  Puntos a cubrir:
  - Operadores aritméticos: `+`, `-`, `*`, `/`, `%`, `**`
  - Operadores de asignación: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
  - Operadores de comparación: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
  - Operadores lógicos: `&&`, `||`, `!`
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

let a = 10;
let b = 5;

console.log("--- Ejercicio 02: Operadores ---");

// Operadores Aritméticos
console.log("Suma (a + b):", a + b);         // 15
console.log("Resta (a - b):", a - b);        // 5
console.log("Multiplicación (a * b):", a * b); // 50
console.log("División (a / b):", a / b);      // 2
console.log("Módulo (a % b):", a % b);       // 0
console.log("Exponenciación (a ** b):", a ** b); // 100000

// Operadores de Asignación
a += 5; // a = a + 5; => a = 15
b *= 2; // b = b * 2; => b = 10
console.log("Nuevo valor de a (a += 5):", a); // 15
console.log("Nuevo valor de b (b *= 2):", b); // 10

// Operadores de Comparación
console.log("a == b:", a == b);         // true (15 == 10 es false, pero si a fuera '10' == 10 sería true)
                                         // ERROR: a es 15 y b es 10. Corregir mentalmente o cambiar valores.
                                         // En este punto, 'a' es 15 y 'b' es 10.
                                         // console.log("a == b:", 15 == 10); // false
console.log("a === b:", a === b);       // false
console.log("a != b:", a != b);         // true
console.log("a !== b:", a !== b);       // true
console.log("a > b:", a > b);           // true
console.log("a < b:", a < b);           // false
console.log("a >= b:", a >= b);         // true
console.log("a <= b:", a <= b);         // false

// Operadores Lógicos
let condicion1 = true;
let condicion2 = false;
console.log("condicion1 && condicion2:", condicion1 && condicion2); // false
console.log("condicion1 || condicion2:", condicion1 || condicion2); // true
console.log("!condicion1:", !condicion1);                         // false

// --- PRUEBAS (No modificar) ---
// Puedes verificar la salida en la consola del navegador.