'use strict';

// todo número terá nativo uma função para calcular raiz quadrada e potência

150.00.__proto__.raizQuadrada = function() {
  return Math.sqrt(this);
}

150.00.__proto__.potencia = function(exp) {
  return Math.pow(this,exp);
}

console.log(9.0.raizQuadrada());
console.log(2.0.potencia(4));
