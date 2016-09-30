'use stric'

const obj = {}

function add(obj, prop, value) {
  console.log('obj: ' + obj);
  console.log('prop: ' + prop);
  console.log('value: ' + value);
  obj[prop] = value;
}


add(obj, 'nome', 'Marcel');

console.log(obj);
