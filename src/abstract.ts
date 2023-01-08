abstract class Vechile {
  abstract wheels: number; // karena bersifat abstract, child nya harus meng-implement property ini

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
