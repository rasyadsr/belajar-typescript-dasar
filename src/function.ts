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
