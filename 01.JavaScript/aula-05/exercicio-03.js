'use strict'

// Altere o protótipo de Number para adicionar potencia
// e raiz quadrada;
var propriedades = 'nome,idade,sexo,cpf';

Number.prototype.sqrt = function() {
  return Math.sqrt(this);
function quebrarCSV(csv) {
  return csv.split(',');
}

console.log(new Number(144.0).sqrt());
console.log(propriedades.__proto__); // String
console.log(quebrarCSV(propriedades));
