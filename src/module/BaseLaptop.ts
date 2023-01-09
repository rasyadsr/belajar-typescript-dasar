import ILaptop from "./ILaptop";
import { a, b } from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(
    name: string,
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchButton = withTouchButton;
  }

  a(): void {
    console.log(`${this.name} menekan ${a()}`); // dari keyboard
  }

  b(): void {
    console.log(`${this.name} menekan ${b()}`); // dari keyboard
  }
}

export default BaseLaptop;
