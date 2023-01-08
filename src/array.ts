/**
 * ==========
 * Array
 * ==========
 */
let array: number[];
array = [1, 2, 3];

let array2: string[];
array2 = ["hello", "world"];

let array3: any[];
array3 = ["hello", 1, true];

/**
 * ==========
 * Tuples
 * ==========
 */
let biodata: [string, number];

biodata = ["bandoeng", 123];
/**
 * Ini akan error
    biodata = ["djakarta", true]; // karena tipe value nya tidak sesuai
    biodata = ["bandoeng", 123, false]; // karena jumlah / length value tidak sesuai
 */
