import BaseLaptop from "./BaseLaptop";

class Macbook<T> extends BaseLaptop<T> {
  constructor(type: T, withNumeric: boolean, withTouchButton: boolean) {
    super("Macbook", type, withNumeric, withTouchButton);
  }
}

export default Macbook;
