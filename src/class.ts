/*
Seperti biasa
export class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
*/

/** constructor promote property */
export class Person {
  constructor(public name: string) {}
}

let personOne = new Person("Rasyad");
console.log(personOne);
