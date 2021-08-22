function capitalize(s){
  let first = "";
  let second = "";
  for (let i=0; i < s.length; i++) {
    if (i%2 === 0) {
      first += s[i].toUpperCase();
      second += s[i];
    } else {
      second += s[i].toUpperCase();
      first += s[i];
    }
  }
  return [first, second];
};