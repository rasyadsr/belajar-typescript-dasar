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
// console.log(personOne);

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
  phone: string;
  // kasih default value misal string kosong atau 0
  // di kasih _ di awal biar nama setter nya bisa email, this property nya jadi this._email
  private _email: string = "";

  constructor(name: string, phone: string) {
    super(name);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  /** Function setter tidak boleh mereturn apapun, ga boleh di kasih void / any juga */
  set email(value: string) {
    /** Contoh validasi */
    if (value.length < 5) {
      this._email = "Format email tidak valid!";
      return;
    }
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

let admin = new Admin("Fulan", "08168432463278");
// console.log(admin);

admin.email = "fulan@gmail.com";
console.log(admin.email); // fulan@gmail.com

admin.email = "ful";
console.log(admin.email); // Format email tidak valid!
