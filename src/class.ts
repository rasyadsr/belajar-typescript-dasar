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

export class Role {
  constructor(public name: string) {}

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }
}

class Admin extends Role {
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

let admin = new Admin("Fulan");
console.log(admin);
