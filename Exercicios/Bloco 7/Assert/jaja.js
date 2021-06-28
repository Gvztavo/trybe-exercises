const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);

assert.strictEqual(sum(4), "5");

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), "fizzbuzz");

assert.strictEqual(myFizzBuzz(9), "fizz");

assert.strictEqual(myFizzBuzz(10), "buzz");

assert.strictEqual(myFizzBuzz(2), 2);


const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.strictEqual(typeof(obj3, obj2, obj1), 'object');

const assert = require('assert');
// escreva a função addOne aqui
function addOne(){
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

const vqv = (nome, idade) => {
  if (nome == null || idade == null){
    let message = `undefined`;
    console.log(message)
  }
  else{
    let message = `Oi, meu nome é ${nome}!
    Tenho ${idade} anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!`
    console.log(menssage)
  }
};
vqv()