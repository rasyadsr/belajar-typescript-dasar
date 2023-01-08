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

console.log(asus.on());
console.log(macbook.off());
