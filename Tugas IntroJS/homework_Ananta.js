console.log("String🅰 and Number0️⃣ Changer")
console.log("---------");
/* 
goodbye -> g**by*
1359 -> $
*/

/*Soal 1. 
Mengubah huruf vokal menjadi simbol bintang "*"
*/
let String = "The quick brown fox jumps over the lazy dog";
// Fungsi mengubah huruf vokal/vowels
function ganti(String){
  const vokal = /[aiueo]+/g;
  return String.replace(vokal,"*");
}
// Memanggil fungsi
const result = ganti(String);
console.log(result);

// Fungsi mengubah angka ganjil/odd number
let Number = "085208390660";

function tukar(Number){
  const angka = /[13579]+/g;
  return Number.replace(angka,"$");
}
// Memanggil fungsi
const hasil = tukar(Number);
console.log(hasil);
console.log("---------");

/* Soal 2. 
  Hitung dan cetak jumlah nilai dalam Array dengan hasil max 30, 
  saat melebihi max tambahkan "it's big"
  */
// Array
let arr = [1, 2, 8, 8, 3, 1, 7, 1];
let sum = arr.reduce((a, b) => a + b);
if (sum > 30){
  console.log("Nilai jumlah Array: "+ sum);
  console.log("It's big!")
} 
else{
  console.log("Nilai jumlah Array: "+ sum);
}
// Panjang Array
console.log("Panjang Array: "+ arr.length);
console.log("---------");

/*Soal 3.
Cari nilai terbesar dan terkecil pada suatu Array
*/
// Array
let Array = [11, 424, 55, 3, 6, 7,];

//Function.prototype.apply()
let Minimum = Math.min.apply(null, Array);
let Maximum = Math.max.apply(null, Array);

console.log("Nilai minimum Array: ", Minimum);
console.log("Nilai maximum Array: ", Maximum);

console.log("---------");
//Spread operator
let Min = Math.min(...Array);
let Max = Math.max(...Array);
console.log("Nilai minimum Array: ", Min);
console.log("Nilai maximum Array: ", Max);