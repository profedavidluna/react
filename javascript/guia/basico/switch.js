// 03_conditionals.js

/*
  ========================================
  EJERCICIO: Estructuras Condicionales
  ========================================

  Descripción:
  Practica el uso de sentencias 'if/else if/else', 'switch' y el operador ternario
  para controlar el flujo de tu programa basado en diferentes condiciones.

  Instrucciones:
  1.  **If/Else If/Else (Calificación de Nota):**
      - Crea una variable `nota` y asígnale un valor numérico (ej. 75, 92, 50).
      - Usa una estructura `if/else if/else` para imprimir en la consola la calificación
        correspondiente:
        - "Sobresaliente" si la nota es mayor o igual a 90.
        - "Aprobado" si la nota es mayor o igual a 70 y menor que 90.
        - "Reprobado" si la nota es menor que 70.

  2.  **Switch (Día de la Semana):**
      - Crea una variable `diaSemana` y asígnale un string (ej. "lunes", "sábado", "martes").
      - Usa una sentencia `switch` para imprimir en la consola:
        - "Es día laborable" si es "lunes", "martes", "miércoles", "jueves" o "viernes".
        - "Es fin de semana" si es "sábado" o "domingo".
        - "Día no reconocido" para cualquier otro valor (usa un caso `default`).

  3.  **Operador Ternario (Par o Impar):**
      - Crea una variable `numero` y asígnale un valor numérico (ej. 15, 20).
      - Usa el operador ternario para determinar si el número es "Par" o "Impar".
      - Imprime el resultado en la consola.

  Recomendaciones:
  - Asegúrate de cubrir todos los posibles caminos en tus condicionales.
  - `break` es importante en las sentencias `switch`.

  Puntos a cubrir:
  - `if`, `else if`, `else`
  - `switch`, `case`, `break`, `default`
  - Operador ternario (`condicion ? valorSiVerdadero : valorSiFalso`)
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 03: Estructuras Condicionales ---");

// 1. If/Else If/Else (Calificación de Nota)
let nota = 75; // Puedes cambiar este valor para probar

if (nota >= 90) {
    console.log(`Nota: ${nota} - Sobresaliente`);
} else if (nota >= 70) {
    console.log(`Nota: ${nota} - Aprobado`);
} else {
    console.log(`Nota: ${nota} - Reprobado`);
}

// 2. Switch (Día de la Semana)
let diaSemana = "martes"; // Puedes cambiar este valor para probar

switch (diaSemana.toLowerCase()) { // Usamos .toLowerCase() para hacerla insensible a mayúsculas/minúsculas
    case "lunes":
    case "martes":
    case "miércoles":
    case "miercoles": // Incluir ambas ortografías por si acaso
    case "jueves":
    case "viernes":
        console.log(`Día: ${diaSemana} - Es día laborable`);
        break;
    case "sábado":
    case "sabado":
    case "domingo":
        console.log(`Día: ${diaSemana} - Es fin de semana`);
        break;
    default:
        console.log(`Día: ${diaSemana} - Día no reconocido`);
}

// 3. Operador Ternario (Par o Impar)
let numero = 20; // Puedes cambiar este valor para probar
let resultadoParImpar = (numero % 2 === 0) ? "Par" : "Impar";
console.log(`El número ${numero} es ${resultadoParImpar}`);

// --- PRUEBAS (No modificar) ---
// Puedes verificar la salida en la consola del navegador.