function triangle(n) {
  let enter = "";
  if (typeof n !== "number" || n < 0) {
    console.log("Parameter harus berupa angka dan harus nomor positif");
  } else {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        enter += i;
      }
      enter += "\n";}
    }
    return enter;
  }


console.log(triangle(1));
console.log(triangle(3));
console.log(triangle(5));
console.log(triangle("abc"));
console.log(triangle(-1));