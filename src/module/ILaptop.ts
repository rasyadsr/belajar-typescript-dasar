export default interface ILaptop<T> {
  name: string;
  type: T; // Type nya tergantung dari yang user tentukan
  withNumeric: boolean;
  withTouchButton: boolean;
}
