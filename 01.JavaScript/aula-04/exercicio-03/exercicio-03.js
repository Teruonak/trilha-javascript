'use strict';

function funcao1() {
  console.log('funcao1');
  return false;
}

function funcao2() {
  console.log('funcao2');
  return true;
}

var result1 = (funcao1() && funcao2());
// var result2 = (funcao1() & funcao2());

console.log('&& : ' + result1);
