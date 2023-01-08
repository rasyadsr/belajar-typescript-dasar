## Install dan konfigurasi typescript

1. Buat project node js

```
yarn init // jika menggunakan yarn

npm init // jika menggunakan npm
```

2. install typescript

```
yarn add typescript -D // sebagai dependency di project saat ini

yarn add global typescript // install secara global
```

3. Menambahkan script pada package.json

```
  "scripts": {
    /**
       Menghapus semua file yang ada di folder build kemudia melakukan compile pada file typescript nya
       sehingga menghasilkan file javascript digukan untuk tahap production
    */
    "tsc": "rm -rf build/ && tsc",

    /**
       Menghapus semua file yang ada di folder build kemudia melakukan compile pada file typescript nya
       sehingga menghasilkan file javascript namun secara realtime -w itu adalah watch dan digunakan untuk tahap development
    */
    "ts": "rm -rf build/ && tsc -w",

    /**
       Menjalankan file index.js yang berada di folder build menggunakan nodemon
    */
    "dev": "nodemon ./build/index.js"
  },
```

4. Konfigurasi project typescript

```
// jika typescript di install di project init saja
npx tsc --init
// atau
./node_modules/.bin/tsc --init

// jka typescript di install secara global
tsc --init
```

5. Konfigurasikan typescript mu di file tsconfig.json

---

## Tipe data string

```
/**
   Kode di bawah akan menghasilkan error seperti ini
   Type 'number' is not assignable to type 'string'.
   karena typescript itu static type
   ketik kita sudah membuat variable nama dengan value bertipe data string,
   maka kita hanya bisa meng-assign kembali value yang bertipe data string
*/
let nama : string = "Rasyad";

nama = 20;

```

---

## Tipe data number

```
let umur: number = 18;
/**
 * ini akan error karena bukan bertipe data number
    umur = "20";
    umur = true
 */
/**
 * Ini akan berhasil
    umur = 20;
 *
 */
```

---

## Tipe data boolean

```
let isMarried: boolean = false;
/**
 * Ini akan error bukan bertipe data boolean
   isMarried = "belum";
 */
/**
 * Ini akan berhasil
    isMarried = false;
 */

```

---

## Tipe data any

- tipe data curang dimana kita bisa menaruh tipe data apapun
- sama aja kayak pakai javascript 😂

```
let apapun_itu: any = "gelas";
/**
 * Ga akan ada yang error, semua nya berhasil
 *
    apapun_itu = 10;
    apapun_itu = true;
 */
```

---

## Array

```
let array: number[]; // deklarasi array of number
array = [1, 2, 3];

let array2: string[]; // deklarasi array of string
array2 = ["hello", "world"];

let array3: any[]; // deklarasi array of any
array3 = ["hello", 1, true];
```

---

## Tuples

- adalah tipe data seperti array yang isinya bisa berbagai macam data, namun jumlah / length nya bisa di batasi

```
let biodata: [string, number];

biodata = ["bandoeng", 123];
/**
 * Ini akan error
    biodata = ["djakarta", true]; // karena tipe value nya tidak sesuai
    biodata = ["bandoeng", 123, false]; // karena jumlah / length value tidak sesuai
 */

```

---

## Enum

- adalah sebuah tipe data yang menyimpan sekumpulan data constant seperti halnya pada file `.env`

```
/**
 * ==========
 * Numeric enum
 * ==========
 */

/**
 * kalau tidak meng-set value nya maka akan otomatis seperti ini
 *
 **/
enum Month {
  JAN,
  FEB,
  MAR,
  APR,
  MAY,
}
/*
 Hasil :
 {
  '0': 'JAN',
  '1': 'FEB',
  '2': 'MAR',
  '3': 'APR',
  '4': 'MAY',
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4
}
*/
console.log(Month);

/**
 * Namun jika kita meng-set JAN menjadi 1 misalnya, maka FEB akan menjadi 2
 **/
enum MonthOther {
  JAN = 1,
  FEB,
  MAR = 100,
  APR,
  MAY,
}
/*
Hasil :
 1
 2
 */
console.log(MonthOther.JAN);
console.log(MonthOther.FEB);

/**
 * Begitupun jika kita meng-set MAR = 100 maka APR akan menjadi = 101
 */

enum MonthOtherAgain {
  JAN = 1,
  FEB,
  MAR = 100,
  APR,
  MAY,
}
/*
Hasil :
 100
 101
 */
console.log(MonthOtherAgain.MAR);
console.log(MonthOtherAgain.APR);

/**
 * ==========
 * String enum
 * ==========
 */

/**
 * Jika enum bertipe string ketika kita mengisikan value pada satu key nya,
 * maka kita juga harus memberikan value juga pada key setelahnya
 * increment hanya berlaku pada numeric enum saja
 */

enum MonthOtherAgainAndOverAgain {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "MARET",
  APR = "APRIL",
  MAY = "MEI",
}

/**
 * ini akan error
 *
 enum MonthOtherAgainAndOverAgain {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "MARET",
  APR = "APRIL",
  MAY
}
 */

console.log(MonthOtherAgainAndOverAgain.MAY); // MEI
```

---

## Function

```
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

```

---

## Function argument type

```
function multiply(a: number, b: number): number {
  return a * b;
}
const hasil = multiply(2, 3);
console.log(hasil);
```

---

## Function as type

```
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
```

---

## Object

```
type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Rasyad",
  age: 18,
  /*
    Misal kita menambah property address, ini akan error karena
    type User hanya berisi property name, dan age saja
    address: "Bandoeng",
  */
};

```

## Union Type

- pada union type kita bisa menentukan tipe data varible lebih dari satu

```
let phone: number | string;
phone = 6281221572736;
phone = "081224334732";
phone = true; // ini akan error karena di set nya hanya untuk number dan string saja
```

## Function default parameter

```
const fullName = (first: string, last: string = "Uchiha"): string => {
  return first + " " + last;
};
console.log(fullName("Rasyad")); // Rasyad Uchiha
console.log(fullName('Uzumaki', 'Naruto')) // Uzumaki Naruto
```

## Optional parameter

- jika parameter di berikan optional parameter, ketika tidak di isi kan maka akan di beri nilai undefined

```
const kata = (value1: string, value2?: string): string => {
  return value1 + " dan " + value2;
};
console.log(kata("hello")); // hello dan undefined
```

---

## Class Dasar

```
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

```

## Inheritance

```
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
```

---

## Super constrcutor

- kita perlu menambahkan parameter parent constructor pada parameter child construct nya juga

```
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

  constructor(name: string, phone: string) {
    super(name); // memberi parameter pada parent constructor nya menggunakan function super()
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

let admin = new Admin("Fulan", "08168432463278");
console.log(admin);
```

---

## Getter dan setter

- Getter mendapatkan value
- Setter memberikan value yang dimana di dalamnya bisa terdapat validasi

```
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
```

---

## Static property dan Static method

- ketika sebuah property / method di berikan keyword static maka untuk cara mengakses nya kita tidak perlu melakukan intansiasi object

```
class Contoh {
  public static getApapunItu = "apa weh";

  public static getApaAja(): string {
    return "apa ajah";
  }
}

console.log(Contoh.getApapunItu);
console.log(Contoh.getApaAja());
```

---

## Abstract Class

```
abstract class Vechile {
  abstract wheels: number; // karena bersifat abstract property nya, maka child nya harus meng-implement property ini

  start(): void {
    console.log("BROOM");
  }
}

class Car extends Vechile {
  wheels: number = 4;
}

class MotorCycle extends Vechile {
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
console.log(car.start());

```

---

## Interface

```
interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    (this.name = name), (this.isGaming = isGaming);
  }

  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

class Macbook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    (this.name = name), (this.keyboardLight = keyboardLight);
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

let asus: Asus = new Asus("Tuf Gaming", true);
let macbook: Macbook = new Macbook("Pro 15", true);

console.log(asus);
console.log(macbook);

```

---

## Generic

- merupakan type data yang dynamis

```
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

```
