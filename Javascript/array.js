function arrayDiff(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (!(b.includes(a[i]))) {
      c.push(a[i]);
    }
  } return c;
}