let ans = 1;
let i = 1;

while (true) {
  ans *= i;
  i++;
  if (i > 10) {
    break;
  }
}

document.write(ans);