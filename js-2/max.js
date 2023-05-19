function max(numero = [1, 2, 3, 4, 5]) {
    if (numero.length === 0) {
      return "undefined";
    }
  
    let nummax = numero[0];
    for (let i = 1; i < numero.length; i++) {
      if (numero[i] > nummax) {
        nummax = numero[i];
      }
    }
  
    return nummax;
  }
