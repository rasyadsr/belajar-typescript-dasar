/**
 * ==========
 * String
 * ==========
 */
let nama: string = "Rasyad";
/**
 * Ini akan error
 * nama = 20;
 */
/**
 * Ini akan berhasil
 * nama = "20";
 */

/**
 * ==========
 * Number
 * ==========
 */

let umur: number = 18;
/**
 * ini akan error
    umur = "20";
    umur = true
 */
/**
 * Ini akan berhasil
    umur = 20;
 * 
 */

/**
 * ==========
 * Boolean
 * ==========
 */

let isMarried: boolean = false;
/**
 * Ini akan error
   isMarried = "belum";
 */
/**
 * Ini akan berhasil
    isMarried = false; 
 */

/**
 * ==========
 * Any
 * ==========
 */
let apapun_itu: any = "gelas";
/**
 * Ga akan ada yang error, semua nya berhasil
 * 
    apapun_itu = 10;
    apapun_itu = true;
 */

/**
 * ==========
 * Union Type
 * ==========
 */
let phone: number | string;
phone = 6281221572736;
phone = "081224334732";
// phone = true; // ini akan error
