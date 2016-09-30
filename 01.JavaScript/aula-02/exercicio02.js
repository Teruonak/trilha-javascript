'use stric'

const operacoes = {
  x: 10,
  y: 20,
  soma: function() {
    return this.x + this.y;
  },
  subtracao: subtracao
}

// sofre hoisting
function subtracao() {
  return this.x - this.y;
}

operacoes.divisao = function() {
  return this.x / this.y;
}

var multiplicacao = function() {
  return this.x * this.y;
}

operacoes.multiplicacao = multiplicacao;

function somarTudo() {
  var somaTotal = 0;
  for (var prop in operacoes) {
    value = operacoes[prop];
    if (operacoes.hasOwnProperty(prop)) {
      if (typeof operacoes[prop] == 'function') {
        value = operacoes[prop]();
      }
      somaTotal += value;
    }
  }
  return somaTotal;
}

console.log(operacoes.soma());
console.log(operacoes.subtracao());
console.log(operacoes.divisao());
console.log(operacoes.multiplicacao());
console.log(somarTudo());
