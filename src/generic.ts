function myData<T>(value: T) {
  // function biasa
  return value;
}

const withArrowFunction = <T>(value: T) => {
  // arrow function
  return value;
};
/**
 * - Sebenarnya pendefinisian nya bisa menggunakan kata <T> atau <Type> standar nya seperti itu
 * - Kalau misalnya kita masukin parameter nya string, maka parameter nya menjadi bertipe string return nya pun string
 * - Kalau misalnya kita masukin parameter nya number, maka parameter nya menjadi bertipe number return nya pun number
 */

console.log(myData("Hello world"));
console.log(myData(10));
