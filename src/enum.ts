/**
 * ==========
 * Enum
 * - numeric enum
 * - string enum
 * ==========
 */

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
