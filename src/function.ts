/**
 * ==========
 * Return type function
 * ==========
 */

function getNama(): string {
  return "Rasyad";
}

console.log(getNama());

function getAge(): number {
  return 123;
}

console.log(getAge());

function printName(): void {
  console.log("print Name from void function");
}
printName();

/**
 * ==========
 * function argument type
 * ==========
 */

function multiply(a: number, b: number): number {
  return a * b;
}
const hasil = multiply(2, 3);
console.log(hasil);

/**
 * ==========
 * function as type
 * ==========
 */

type Age = number;
/**
 * type Age bertipe number
 */
let age: Age = 10;
console.log(age);

type Tambah = (value1: number, value2: number) => number;
/**
 * MIsal kita merubah value2 menjadi tipe string itu akan error
 * karena type Tambah value2 nya bertipe number
 */
const add: Tambah = (value1: number, value2: number): number => {
  return value1 + value2;
};
console.log(add(10, 20));
