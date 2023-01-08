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
