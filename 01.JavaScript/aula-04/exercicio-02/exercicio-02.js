'use strict';

function Opa(nome) {
  this.nome = nome;
  this.toString = function() {
    return this.nome;
  }
}

var result = new Opa('Marcel') == 'Marcel';

console.log(result);
