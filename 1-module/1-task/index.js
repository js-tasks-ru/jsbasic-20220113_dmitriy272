function factorial(n) {
  let factorial = 1;

  if (n === 0 || n === 1) {
    return 1;
  }

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

