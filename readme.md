## Install dan konfigurasi typescript

1. Buat project node js

```
yarn init // jika menggunakan yarn

npm init // jika menggunakan npm
```

2. install typescript

```
yarn add typescript -D // sebagai dependency di project saat ini

yarn add global typescript // install secara global
```

3. Menambahkan script pada package.json

```
  "scripts": {
    /**
       Menghapus semua file yang ada di folder build kemudia melakukan compile pada file typescript nya
       sehingga menghasilkan file javascript digukan untuk tahap production
    */
    "tsc": "rm -rf build/ && tsc",

    /**
       Menghapus semua file yang ada di folder build kemudia melakukan compile pada file typescript nya
       sehingga menghasilkan file javascript namun secara realtime -w itu adalah watch dan digunakan untuk tahap development
    */
    "ts": "rm -rf build/ && tsc -w",

    /**
       Menjalankan file index.js yang berada di folder build menggunakan nodemon
    */
    "dev": "nodemon ./build/index.js"
  },
```

4. Konfigurasi project typescript

```
// jika typescript di install di project init saja
npx tsc --init
// atau
./node_modules/.bin/tsc --init

// jka typescript di install secara global
tsc --init
```

5. Konfigurasikan typescript mu di file tsconfig.json

---

## Tipe data string

```
/**
   Kode di bawah akan menghasilkan error seperti ini
   Type 'number' is not assignable to type 'string'.
   karena typescript itu static type
   ketik kita sudah membuat variable nama dengan value bertipe data string,
   maka kita hanya bisa meng-assign kembali value yang bertipe data string
*/
let nama : string = "Rasyad";

nama = 20;

```

## Tipe data number

```
let umur: number = 18;
/**
 * ini akan error karena bukan bertipe data number
    umur = "20";
    umur = true
 */
/**
 * Ini akan berhasil
    umur = 20;
 *
 */
```

## Tipe data boolean

```
let isMarried: boolean = false;
/**
 * Ini akan error bukan bertipe data boolean
   isMarried = "belum";
 */
/**
 * Ini akan berhasil
    isMarried = false;
 */

```

## Tipe data any

- tipe data curang dimana kita bisa menaruh tipe data apapun
- sama aja kayak pakai javascript 😂

```
let apapun_itu: any = "gelas";
/**
 * Ga akan ada yang error, semua nya berhasil
 *
    apapun_itu = 10;
    apapun_itu = true;
 */
```
