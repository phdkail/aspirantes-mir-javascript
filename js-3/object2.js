// Crear objeto literal "persona"
let persona = {
    nombre: "Ivan",
    edad: 34,
    ciudad: "Torino",
    profesion: "Ingeniero"
  };
  
  // Imprimir el objeto "persona" completo
  console.log(persona);
  
  // Definir función "presentacion"
  function presentacion(persona) {
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
  }
  
  // Llamar a la función "presentacion" y almacenar el resultado en una variable "mensaje"
  let mensaje = presentacion(persona);
  
  // Imprimir el valor de la variable "mensaje"
  console.log(mensaje);
  
  // Agregar nueva propiedad "hobbies" al objeto "persona"
  persona.hobbies = ["viajar", "comer", "teatro"];
  
  // Imprimir la propiedad "hobbies" del objeto "persona"
  console.log(persona.hobbies);
  
  // Utilizar un ciclo for para imprimir cada uno de los elementos del arreglo de "hobbies"
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }
  