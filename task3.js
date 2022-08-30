function printSegitiga(num) {
  if (typeof num !== "number") {
    return "Data harus number";
  } else {
    let a = "";
    for (let i = 1; i <= num; i++) {
      for (let j = num; j >= i; j--) {
        a += j;
      }
      a += "\n";
    }
    return a;
  }
}
console.log(printSegitiga(5));
