'use strict'

let pessoa = {
  sexo: 'Masculino'
};

let marcel = {
  nome: 'Renan',
};

Object.setPrototypeOf(marcel, pessoa);

let jose = {
  nome: 'Jose'
};

Object.setPrototypeOf(jose, pessoa);

console.log('Marcel: '+ marcel.sexo);
console.log('Jose: ' + jose.sexo);

pessoa.sexo = 'Feminino';

console.log('######');
console.log('pessoa.sexo = "Feminino"');
console.log('Marcel: '+ marcel.sexo);
console.log('Jose: ' + jose.sexo);

jose.sexo = 'Viado';

console.log('######');
console.log('jose.sexo = Viado');
console.log('Marcel: '+ marcel.sexo);
console.log('Jose: ' + jose.sexo);

console.log('######');
console.log('Marcel: '+ marcel);
console.log('Jose: ' + jose);

console.log(Object.getPrototypeOf(marcel)); // pessoa // same as console.log(marcel.__proto__);
