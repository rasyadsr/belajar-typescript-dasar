/**
 * Karena class List ini akan bersifat dynamis jadi kita beri type <T> */
class List<T> {
  private data: T[]; // Deklarasi array generic

  constructor(...elements: T[]) {
    // parameter yang bertipe array namun generic (bisa apapun itu isi array nya)
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]) {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

/** Karena class List bertipe generic, kita perlu memberitahukan type List nya pada saat instansiasi object nya */
let numbers = new List<number>(1, 2, 3); // karena menggunakan rest parameter di constructor nya jadi, pengiriman data nya seperti ini
numbers.add(4);
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());

/** Beginilah cara agar class List bisa menampung data berupa number maupun string */
let random = new List<number | string>(1, "a", "b", 2);
random.add("frejf");
random.add(3);
random.addMultiple(321, "jdwiqdji");
console.log(random.getAll());
