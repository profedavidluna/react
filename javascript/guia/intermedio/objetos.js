// 02_objects.js

/*
  ========================================
  EJERCICIO: Objetos
  ========================================

  Descripción:
  Este ejercicio te ayudará a comprender cómo crear, acceder, modificar y eliminar
  propiedades de objetos en JavaScript, incluyendo objetos anidados.

  Instrucciones:
  1.  **Creación de Objeto:**
      - Crea un objeto llamado `producto` con las siguientes propiedades:
        - `nombre`: "Laptop" (string)
        - `precio`: 1200 (number)
        - `disponible`: true (boolean)

  2.  **Acceso a Propiedades:**
      - Accede e imprime en la consola el `nombre` del producto usando la notación de punto.
      - Accede e imprime el `precio` del producto usando la notación de corchetes (bracket notation).

  3.  **Añadir y Modificar Propiedades:**
      - Añade una nueva propiedad al objeto `producto` llamada `categoria` con el valor "Electrónica".
      - Modifica el `precio` del producto a 1150.
      - Imprime el objeto `producto` completo después de las modificaciones.

  4.  **Eliminar Propiedades:**
      - Elimina la propiedad `disponible` del objeto `producto` usando el operador `delete`.
      - Imprime el objeto `producto` después de la eliminación para verificar.

  5.  **Objetos Anidados:**
      - Añade una nueva propiedad al objeto `producto` llamada `detallesTecnicos`. Esta propiedad debe ser otro objeto
        con las siguientes propiedades anidadas:
        - `procesador`: "Intel Core i7" (string)
        - `ram`: 16 (number)
        - `almacenamiento`: "512GB SSD" (string)
      - Accede e imprime en la consola la `ram` del producto a través del objeto `detallesTecnicos`.

  6.  **Iteración de Objetos:**
      - Usa `Object.keys()` para obtener un array con todas las claves (nombres de propiedades) del objeto `producto`. Imprime este array.
      - Usa `Object.values()` para obtener un array con todos los valores de las propiedades del objeto `producto`. Imprime este array.
      - Usa `Object.entries()` para obtener un array de arrays clave-valor del objeto `producto`. Imprime este array.
      - Itera sobre las claves del objeto `producto` usando un bucle `for...in` e imprime cada propiedad y su valor.

  Recomendaciones:
  - Practica las diferentes formas de acceder a las propiedades.
  - Recuerda que `delete` modifica el objeto original.

  Puntos a cubrir:
  - Creación de objetos literales `{}`
  - Acceso a propiedades (`.`, `[]`)
  - Añadir y modificar propiedades
  - Operador `delete`
  - Objetos anidados
  - `Object.keys()`, `Object.values()`, `Object.entries()`
  - Bucle `for...in` para objetos
*/

// --- TU CÓDIGO AQUÍ ---
// [Escribe tu solución debajo de esta línea]

console.log("--- Ejercicio 02: Objetos ---");

// 1. Creación de Objeto
let producto = {
    nombre: "Laptop",
    precio: 1200,
    disponible: true
};
console.log("Objeto producto inicial:", producto);

// 2. Acceso a Propiedades
console.log("Nombre del producto (notación de punto):", producto.nombre); // Laptop
console.log("Precio del producto (notación de corchetes):", producto["precio"]); // 1200

// 3. Añadir y Modificar Propiedades
producto.categoria = "Electrónica"; // Añade la propiedad
producto.precio = 1150; // Modifica la propiedad
console.log("Objeto producto después de añadir categoría y modificar precio:", producto);
// { nombre: 'Laptop', precio: 1150, disponible: true, categoria: 'Electrónica' }

// 4. Eliminar Propiedades
delete producto.disponible;
console.log("Objeto producto después de eliminar 'disponible':", producto);
// { nombre: 'Laptop', precio: 1150, categoria: 'Electrónica' }

// 5. Objetos Anidados
producto.detallesTecnicos = {
    procesador: "Intel Core i7",
    ram: 16,
    almacenamiento: "512GB SSD"
};
console.log("Objeto producto con detalles técnicos anidados:", producto);
console.log("RAM del producto:", producto.detallesTecnicos.ram); // 16

// 6. Iteración de Objetos
console.log("Claves del objeto producto:", Object.keys(producto));
// [ 'nombre', 'precio', 'categoria', 'detallesTecnicos' ]

console.log("Valores del objeto producto:", Object.values(producto));
// [ 'Laptop', 1150, 'Electrónica', { procesador: 'Intel Core i7', ram: 16, almacenamiento: '512GB SSD' } ]

console.log("Entradas del objeto producto (pares clave-valor):", Object.entries(producto));
/*
[
  [ 'nombre', 'Laptop' ],
  [ 'precio', 1150 ],
  [ 'categoria', 'Electrónica' ],
  [ 'detallesTecnicos', { procesador: 'Intel Core i7', ram: 16, almacenamiento: '512GB SSD' } ]
]
*/

console.log("\nIterando propiedades con for...in:");
for (const key in producto) {
    if (producto.hasOwnProperty(key)) { // Buena práctica para evitar propiedades heredadas
        console.log(`${key}: ${producto[key]}`);
    }
}
/*
nombre: Laptop
precio: 1150
categoria: Electrónica
detallesTecnicos: [object Object] (Para ver el contenido del objeto anidado, necesitarías JSON.stringify)
*/

// --- PRUEBAS (No modificar) ---
// Puedes verificar la salida en la consola del navegador.