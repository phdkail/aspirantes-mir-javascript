// object1.js

// Crear variable pedro como objeto literal
var pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
  };
  
  // Imprimir el valor de la llave "edad"
  console.log(pedro.edad);
  
  // Agregar propiedad "estatura" con valor 1.8
  pedro.estatura = 1.8;
  
  // Eliminar propiedad "activo"
  delete pedro.activo;
  
  // Recorrer y mostrar todas las propiedades del objeto
  for (var key in pedro) {
    console.log(key + ": " + pedro[key]);
  }
  
  // Agregar función "saluda" al objeto
  pedro.saluda = function() {
    return "Hola, me llamo " + this.nombre;
  };
  
  // Llamar la función "saluda" y verificar el resultado
  console.log(pedro.saluda());
  