let a = [95, 75, 85, 100, 50];
let temp;
let n = 5;

for (i = 0; i < n - 1; i++) {
  for (j = 0; j < 4 - i; j++) {
    if (a[j] > a[j + 1]) {
      temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;
    }
  }
}

for (i = 0; i < 5; i++) {
  console.log(a[i]);
}
