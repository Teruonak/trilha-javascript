'use strict';

Number.prototype.potencia = function(exp) {
  return Math.pow(this,exp);
}

Number.prototype.raizQuadrada = function() {
  return Math.sqrt(this);
}

console.log(9.0.raizQuadrada());
console.log(2.0.potencia(4));
