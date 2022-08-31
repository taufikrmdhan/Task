function printSegitiga(num) {
  if (typeof num !== "number") {
    return "Data harus number";
  } else {
    let a = "";
    for (let i = num; i >=1; i--) {
      for (let j = 1; j <= i; j++) {
        a += j;
      }
      a += "\n";
    }
    return a;
  }
}
console.log(printSegitiga(5));
