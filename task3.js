// Buatlah program yang memiliki satu variabel dengan nama
// “printSegitiga” yg berisi tipe data number yang menghasilkan
// output segitiga terbalik yang berisi angka
function printSegitiga(num) {
  if (typeof num !== "number") {
    return "Data harus number";
  } else {
    let a = "";
    for (let i = num; i > 0; i--) {
      for (let j = 1; j <= i; j++) {
        a = a + j;
      }
      a += "\n";
    }
    return a;
  }
}
console.log(printSegitiga(5));
